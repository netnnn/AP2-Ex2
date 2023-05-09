import "./Main_screen.css";
import React, { useState } from "react";
import Left_screen from "./Left_screen/Left_screen";
import Right_screen from "./Right_screen/Right_screen";

function Main_screen(props) {
  const [CurrentFriend, SetCurrentFriend] = useState("");
  const [state, RENDER] = useState(true);


  const [Mode, SetMode] = useState("");

  var logged = props.LoggedUser;


  return (
    <>
      <Left_screen
        LoggedUser={logged}
        SetCurrentFriend={SetCurrentFriend}
        file={props.file}
        setState={RENDER}
        state={state}
        Mode={Mode}
      />
      <Right_screen
        LoggedUser={logged}
        CurrentFriend={CurrentFriend}
        setState={RENDER}
        state={state}
        Mode={Mode}
        SetMode={SetMode}
      />
    </>
  );
}

export default Main_screen;
