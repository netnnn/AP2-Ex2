import "./Main_screen.css";
import React, { useState } from "react";
import Left_screen from "./Left_screen/Left_screen";
import Right_screen from "./Right_screen/Right_screen";

function Main_screen(props) {
  const [CurrentFriend, SetCurrentFriend] = useState("");
  console.log(CurrentFriend + " is watched");

  var logged = props.LoggedUser;


  return (
    <>
      <Left_screen
        LoggedUser={logged}
        SetCurrentFriend={SetCurrentFriend}
      />
      <Right_screen
        LoggedUser={logged}
        CurrentFriend={CurrentFriend}
      />
    </>
  );
}

export default Main_screen;
