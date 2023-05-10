import "./Chat_tile.css";

function Chat_tile(props, key) {
  const SetCurrentFriend = () => {
    props.SetCurrentFriend(props.Name);
    console.log(props.Name + " is watched");
  };

  return (
    <>
      <div className="chat_tile {props.Mode}" key={key} onClick={SetCurrentFriend}>
        <img src={props.img}></img>
        <div className="friend_name_and_last col">
          <span>{props.Nickname}</span>
          <p className="last_msg">{props.last}</p>
        </div>
        <span className="friend_time col-2">{props.date}</span>
      </div>
    </>
  );
}

export default Chat_tile;
