import "./Right_screen.css";
import Corrent_chat_name_area from "./Corrent_chat_name_area/Corrent_chat_name_area";
import Chat_area from "./Chat_area/Chat_area";
import Input_area from "./Input_area/Input_area";
import { useState } from "react";

function Right_screen(props) {
  const [Details, SetDetails] = useState(true);

  return (
    <>
      <div id="right_screen" className="col col-8">
        <Corrent_chat_name_area CurrentFriend={props.CurrentFriend} />
        <Chat_area
          LoggedUser={props.LoggedUser}
          CurrentFriend={props.CurrentFriend}
        />
        <Input_area
          setState={SetDetails}
          state={Details}
          LoggedUser={props.LoggedUser}
          CurrentFriend={props.CurrentFriend}
        />
      </div>
    </>
  );
}

export default Right_screen;
