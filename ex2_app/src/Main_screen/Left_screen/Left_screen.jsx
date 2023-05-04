import './Left_screen.css'
import My_name_area from "./My_name_area/My_name_area";
import My_chats_area from "./My_chats_area/My_chats_area";
import New_contact_modal from "./New_contact_modal/New_contact_modal";

function Left_screen() {
  return (
    <>
      <div id="left_screen" className="col col-4">
        <My_name_area />
        <My_chats_area />
      </div>
      <New_contact_modal />
    </>
  );
}

export default Left_screen;
