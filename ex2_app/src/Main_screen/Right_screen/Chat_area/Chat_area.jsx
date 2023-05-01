import React, { useEffect } from "react";
import Message from "./Message/Message";

function Chat_area() {
  useEffect(() => {
    var element = document.getElementById("chat_area");
    element.scrollTop = element.scrollHeight;
  });

  return (
    <div id="chat_area">
    
    <Message who="mine" time="15:30" msg="Hello Kira, Im L"/>
    <Message who="yours" time="15:30" msg="Im not kira! I will prove it to you"/>
    <Message who="yours" time="15:30" msg="Lock me up in a jail, if the killing wont stops than Im not kira!"/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>
    <Message who="mine" time="15:30" msg="Hmmmmm interesting... Okay I will accept that."/>



    
    </div>



    
  );
}

export default Chat_area;
