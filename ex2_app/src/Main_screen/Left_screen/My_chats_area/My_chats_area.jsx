import users from "../../../Users_data/Users";
import "./My_chats_area.css";
import Chat_tile from "./Chat_tile/Chat_tile";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function My_chats_area(props) {
  const Exit_link = useRef(null);

  // works in refresh
  if (props.LoggedUser == "") {
    window.location.href = "/";
  }

  var { chats_items } = "<div></div>";

  console.log(props.LoggedUser + " this");

  // if (users.get(props.LoggedUser) != null) {
  //   if (users.get(props.LoggedUser).Friends_Chat_List != null) {
  //     chats_items = Array.from(
  //       users.get(props.LoggedUser).getFriends_Chat_List()
  //     ).map(([key, array]) => (
  //       <Chat_tile
  //         img={users.get(key).getPicture()}
  //         Nickname={users.get(key).getNickname()}
  //         Name={users.get(key).getName()}
  //         key={key}
  //         last={
  //           users.get(key).isChatWith(props.LoggedUser)
  //             ? users.get(key).getLastMsgFrom(props.LoggedUser)
  //             : ""
  //         }
  //         date={
  //           users.get(key).isChatWith(props.LoggedUser)
  //             ? users.get(key).getLastTimeFrom(props.LoggedUser)
  //             : ""
  //         }
  //         SetCurrentFriend={props.SetCurrentFriend}
  //       />
  //     ));
  //   }
  // }



  if (users.get(props.LoggedUser) != null) {
    if (users.get(props.LoggedUser).Friends_Chat_List != null) {
      chats_items = users.get(props.LoggedUser).getFriends_Names().map((Name) => (
        <Chat_tile
          img={users.get(Name).getPicture()}
          Nickname={users.get(Name).getNickname()}
          Name={users.get(Name).getName()}
          key={Name}
          last={
            users.get(Name).isChatWith(props.LoggedUser)
              ? users.get(Name).getLastMsgFrom(props.LoggedUser)
              : ""
          }
          date={
            users.get(Name).isChatWith(props.LoggedUser)
              ? users.get(Name).getLastTimeFrom(props.LoggedUser)
              : ""
          }
          SetCurrentFriend={props.SetCurrentFriend}
        />
      ));
    }
  }

  return (
    <>
      {chats_items}
      <Link id="exit" to="/" ref={Exit_link}></Link>
    </>
  );
}

export default My_chats_area;
