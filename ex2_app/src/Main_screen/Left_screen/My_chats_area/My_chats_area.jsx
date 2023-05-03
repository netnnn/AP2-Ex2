import Chat_tile from "./Chat_tile/Chat_tile";

function My_chats_area() {
  return (
    <>
      <div id="my_chats_area">
        <Chat_tile
          img="yagami.jpg"
          name="Yagamai Light"
          last="well, what's new?"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="watari.jpg"
          name="Watari"
          last="didn't you know?"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="misa.jpg"
          name="Amane Misa"
          last="I love you!!!"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>

        <Chat_tile
          img="matsuda.jpg"
          name="Touta matsuda"
          last="any new order? :)"
          date="3/31/2021 3:21:21 PM"
        ></Chat_tile>
      </div>
    </>
  );
}

export default My_chats_area;
