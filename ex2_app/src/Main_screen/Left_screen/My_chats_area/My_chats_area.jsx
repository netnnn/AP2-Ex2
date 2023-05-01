import Chat_tile from "./Chat_tile/Chat_tile";

function My_chats_area() {
  return (
    <>
      <div id="my_chats_area">
        <Chat_tile
          img="https://wallpaperset.com/w/full/8/3/2/341421.jpg"
          name="Yagamai Light"
          last="well, what's new?"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="https://static.wikia.nocookie.net/deathnote/images/d/dd/Watari_symbol.jpg"
          name="Watari"
          last="didn't you know?"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="https://static.wikia.nocookie.net/deathnotefanon/images/b/be/-Misa-Amane-misa-amane-32669642-704-396.jpg"
          name="Amane Misa"
          last="I love you!!!"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="https://pm1.narvii.com/6728/8fc876eb9ccb548bd1a115cb354b08683c110756v2_00.jpg"
          name="Touta matsuda"
          last="any new order? :)"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>
      </div>
    </>
  );
}

export default My_chats_area;
