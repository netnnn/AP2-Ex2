import "./Corrent_chat_name_area.css";
import { Link } from "react-router-dom";

function Corrent_chat_name_area() {
  return (
    <>
      <div id="corrent_chat_name_area">
        <img src="https://wallpaperset.com/w/full/8/3/2/341421.jpg"></img>
        <span className="friend_name col">Yagamai Light</span>
        <Link to="/">
          <button className="btn btn-danger logout">
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Corrent_chat_name_area;
