import "./Corrent_chat_name_area.css";
import users from "../../../Users_data/Users";
import { Link } from "react-router-dom";

function Corrent_chat_name_area(props) {
  if (props.CurrentFriend == "") {
    return (
      <>
        <div id="corrent_chat_name_area">
          <span className="friend_name col"></span>
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
        <div id="corrent_chat_name_area">
          <img src={users.get(props.CurrentFriend).getPicture()}></img>
          <span className="friend_name col">
            {users.get(props.CurrentFriend).getNickname()}
          </span>
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
