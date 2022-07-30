import React, { useState, useEffect } from "react";
import "./Chat.css";
import Text from "../Login/Text/Text";


function Chat() {
  const [chats, setChats] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const color = localStorage.getItem("color");
    console.log(color, "get");
    document.body.removeAttribute("class");
    document.body.classList.add(color);
  }, []);

  const addChat = () => {
    setChats((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  const changeTheme = (e) => {
    const newColor = e.target.value;
    document.body.removeAttribute("class");
    document.body.classList.add(newColor);

    localStorage.setItem("color", newColor);
  };

  return (
    <div>
      <div className="screen">
        <select id="themes" onChange={changeTheme}>
        <option value="#" disabled>Themes</option>
          <option value="default">Default</option>
          <option value="piglet">Piglet</option>
          <option value="grey">Shades of Grey</option>
          <option value="wood">Pale Wood</option>
          <option value="relay">Relay</option>
          <option value="royal">Royal</option>
        </select>
        <Text text="Hi there!👋" />
        <Text text="I'm Wysa -an AI chatbot built by therapists." />
        <Text text="I'm here to understand your concerns and connect you with the best resources available to support you." />
        <Text text="Can I help?" />
        {chats.map((chat) => {
          return <Text text={chat} />;
        })}

        <div className="input">
          <input
            type="text"
            placeholder="Message...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={addChat}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
