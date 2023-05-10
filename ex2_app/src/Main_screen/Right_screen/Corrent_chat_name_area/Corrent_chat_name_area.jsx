import "./Corrent_chat_name_area.css";
import users from "../../../Users_data/Users";
import { Link } from "react-router-dom";

function Corrent_chat_name_area(props) {
  const handle_click = () => {
    props.Mode == "" ? props.SetMode(" light_mode ") : props.SetMode("");
    users.get(props.LoggedUser).setLight_mode();
    console.log("color");
  };

  users.get(props.LoggedUser).getLight_mode()? props.SetMode(" light_mode ") : props.SetMode("");

  if (props.CurrentFriend == "") {

    return (
      <>
        <div id="corrent_chat_name_area" className={props.Mode}>
          <span className="friend_name col"></span>
          <button onClick={handle_click} className="btn btn-primary color">
          <i class="bi bi-brightness-high-fill"></i>
          </button>
          <Link to="/">
            <button className="btn btn-danger logout">
            <i className="bi bi-box-arrow-right"></i>
            </button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="corrent_chat_name_area" className={props.Mode}>
          <img src={users.get(props.CurrentFriend).getPicture()}></img>
          <span className="friend_name col">
            {users.get(props.CurrentFriend).getNickname()}
          </span>
          <button onClick={handle_click} className="btn btn-primary color">
            <i class="bi bi-brightness-high-fill"></i>
          </button>
          <Link to="/">
            <button className="btn btn-danger logout">
              <i className="bi bi-box-arrow-right"></i>
            </button>
          </Link>
        </div>
      </>
    );
  }
}

export default Corrent_chat_name_area;
