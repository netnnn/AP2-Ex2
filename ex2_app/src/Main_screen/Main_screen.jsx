import "./Main_screen.css";
import React, { useState } from "react";
import Left_screen from "./Left_screen/Left_screen";
import Right_screen from "./Right_screen/Right_screen";

function Main_screen(props) {
  const [CurrentFriend, SetCurrentFriend] = useState("");
  console.log(props.LoggedUser + " is logged");



  return (
    <>
      <Left_screen
        LoggedUser={props.LoggedUser}
        SetCurrentFriend={SetCurrentFriend}
      />
      <Right_screen
        LoggedUser={props.LoggedUser}
        CurrentFriend={CurrentFriend}
      />
    </>
  );
}

export default Main_screen;
