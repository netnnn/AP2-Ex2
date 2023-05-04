import './Chat_area.css'

import React, { useEffect, useState } from "react";
import Message from "./Message/Message";
import the_list from "../../../Chats.js";

function Chat_area() {
  useEffect(() => {
    var element = document.getElementById("chat_area");
    element.scrollTop = element.scrollHeight;
  });



  const msg_items = the_list.map((msg) => (
    <Message
      who={msg.from == "L" ? "mine" : "yours"}
      time={msg.time}
      msg={msg.text}
    />
  ));

  return <div id="chat_area">{msg_items}</div>;
}

export default Chat_area;
