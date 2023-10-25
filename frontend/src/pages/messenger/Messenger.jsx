import React, { useState, useEffect, useRef } from "react";
import axiosInstance from "../../api";
import TopBar from "../../components/TopBar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

function Messenger() {
  const {username} = useParams();

  const userId = username
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  
  const socket = useRef(io("ws://localhost:8940"))

  useEffect(()=>{
   socket.current = io("ws://localhost:8940")
 
  },[])

  useEffect(()=>{
    socket.current.on("getMessage",(data) =>{
      setArrivalMessage({
       sender : data.senderId,
       text : data.text,
       createdAt : Date.now(),
      })
  })
  },[])

useEffect(()=>{
  arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
  setMessages((prev)=>[...prev,arrivalMessage])
},[arrivalMessage,currentChat]);

useEffect(()=>{
  socket.current.emit("addUser",userId)
  // socket.current.on("getUsers",(users)=>{
  //   // console.log(users)
  // })
 
},[])

  // console.log(socket)

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axiosInstance.get("/conversation/"+userId);
        setConversations(response.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    getConversations();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      if (currentChat) {
        try {
          const response = await axiosInstance.get("/message/" + currentChat._id);
          setMessages(response.data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    getMessages();
  }, [currentChat]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newMessage.trim() === "") return;

    const messageData = {
      sender: userId,
      conversationId: currentChat._id,
      text: newMessage,
    };

    try {
      const response = await axiosInstance.post("/message/", messageData);
      setMessages([...messages, response.data]);
      setNewMessage("");

      // Scroll to the latest message
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const receiverId = currentChat?.members.find((member)=> member !== userId)

  socket.current.emit("sendMessage",{
     senderId : userId,
     receiverId,
     text : newMessage,
  })

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div key={c._id} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={userId} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div key={m._id} ref={scrollRef}>
                      <Message message={m} own={m.sender === userId} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">Open a conversation to start a chat.</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Messenger;
