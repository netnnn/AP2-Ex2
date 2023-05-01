function Chat_tile(props) {
  return (
    <>
      <div className="chat_tile ">
        <img src={props.img}></img>
        <div className="friend_name_and_last col">
          <span>{props.name}</span>
          <p className="last_msg">{props.last}</p>
        </div>
        <span className="friend_time col-2">{props.date}</span>
      </div>
    </>
  );
}

export default Chat_tile;
