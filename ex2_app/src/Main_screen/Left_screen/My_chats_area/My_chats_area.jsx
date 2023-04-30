function My_chats_area() {
  return (
    <>
      <div id="my_chats_area">
        <div className="chat_tile ">
          <img src="https://wallpaperset.com/w/full/8/3/2/341421.jpg"></img>
          <div className="friend_name_and_last col">
            <span>Yagamai Light</span>
            <p className="last_msg">well, what's new?</p>
          </div>
          <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
        </div>
        <div className="chat_tile ">
          <img src="https://static.wikia.nocookie.net/deathnote/images/d/dd/Watari_symbol.jpg"></img>
          <div className="friend_name_and_last col">
            <span>Watari</span>
            <p className="last_msg">didn't you know?</p>
          </div>
          <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
        </div>
        <div className="chat_tile ">
          <img src="https://static.wikia.nocookie.net/deathnotefanon/images/b/be/-Misa-Amane-misa-amane-32669642-704-396.jpg"></img>
          <div className="friend_name_and_last col">
            <span>Amane Misa</span>
            <p className="last_msg">I love you!!!</p>
          </div>
          <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
        </div>
        <div className="chat_tile ">
          <img src="https://pm1.narvii.com/6728/8fc876eb9ccb548bd1a115cb354b08683c110756v2_00.jpg"></img>
          <div className="friend_name_and_last col">
            <span>Touta matsuda</span>
            <p className="last_msg">any new order? :)</p>
          </div>{" "}
          <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
        </div>
      </div>
    </>
  );
}

export default My_chats_area;
