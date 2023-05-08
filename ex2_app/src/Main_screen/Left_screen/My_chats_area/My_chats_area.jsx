import users from "../../../Users_data/Users";
import "./My_chats_area.css";
import Chat_tile from "./Chat_tile/Chat_tile";

function My_chats_area(props) {
  var chats_items = "<div></div>";

  if (users.get(props.LoggedUser) != null) {
    if (users.get(props.LoggedUser).Friends_Chat_List != null) {

      chats_items = Array.from(users.get(props.LoggedUser).getFriends_Chat_List()).map(
        ([key, array]) => (
          <Chat_tile
          img="yagami.jpg"
          name="yagami.jpg"
          last="yagami.jpg"
          date="yagami.jpg"
              />
        )
      );
      // img={users.get(key).getPicture()}
      //           name={key}
      //           last={users.get(key).isChatWith(props.LoggedUser)? users.get(key).getLastMsgFrom(props.LoggedUser) : ""}
      //           date={users.get(key).isChatWith(props.LoggedUser)? users.get(key).getLastTimeFrom(props.LoggedUser) : ""}

      console.log(users.get("L").getPicture());
      console.log(chats_items);
      console.log({ chats_items });
      console.log();
      console.log();
      console.log();

      // .get(props.LoggedUser)
      // .Friends_Chat_List.map((Friend, key) => (

      //   // img={Friend}
      //   // name={Friend}
      //   // last={Friend}
      //   // date={Friend}
      //     // img={users.get(Friend).getPicture()}
      //     // name={users.get(Friend).getNickname()}
      //     // last={users.get(Friend).getLastMsgFrom(props.LoggedUser)}
      //     // date={users.get(Friend).getLastTimeFrom(props.LoggedUser)}
      //   // />
      // ));
    }
  }

  //<div>{chats_items}</div>

  return (
    <>
      {chats_items}
    </>
  );
  // <>
  //   <div id="my_chats_area">
  //     <Chat_tile
  //       img="yagami.jpg"
  //       name="Yagamai Light"
  //       last="well, what's new?"
  //       date="3/31/2021 3:21:21 PM"
  //     ></Chat_tile>

  //     <Chat_tile
  //       img="watari.jpg"
  //       name="Watari"
  //       last="didn't you know?"
  //       date="3/31/2021 3:21:21 PM"
  //     ></Chat_tile>

  //     <Chat_tile
  //       img="misa.jpg"
  //       name="Amane Misa"
  //       last="I love you!!!"
  //       date="3/31/2021 3:21:21 PM"
  //     ></Chat_tile>

  //     <Chat_tile
  //       img="matsuda.jpg"
  //       name="Touta matsuda"
  //       last="any new order? :)"
  //       date="3/31/2021 3:21:21 PM"
  //     ></Chat_tile>
  //   </div>
  // </>);
}

export default My_chats_area;
