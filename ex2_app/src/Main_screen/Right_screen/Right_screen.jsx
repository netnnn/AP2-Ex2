import Corrent_chat_name_area from "./Corrent_chat_name_area/Corrent_chat_name_area";
import Chat_area from "./Chat_area/Chat_area";
import Input_area from "./Input_area/Input_area";

function Right_screen() {
  return (
    <>
      <div id="right_screen" className="col col-8">
        <Corrent_chat_name_area />
        <Chat_area />
        <Input_area />
      </div>
    </>
  );
}

export default Right_screen;
