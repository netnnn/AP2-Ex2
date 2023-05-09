// import users from "./Users_data/Users";

class User {
  constructor(props) {
    this.Name = props.Name;
    this.Password = props.Password;
    this.Nickname = props.Nickname;
    this.Picture = props.Picture;
    this.Friends_Chat_List = new Map();
  }

  getName() {
    return this.Name;
  }

  getPassword() {
    return this.Password;
  }

  getNickname() {
    return this.Nickname;
  }

  getPicture() {
    return this.Picture;
  }

  getFriends_Chat_List() {
    return this.Friends_Chat_List;
  }

  getFriend_Chat_List(Name) {
    return this.Friends_Chat_List.get(Name);
  }

  IsYourFriend(Name) {
    return this.Friends_Chat_List.get(Name) != null;
  }

  getLastMsgFrom(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name)[
        this.Friends_Chat_List.get(Name).length - 1
      ].text;
    }
  }

  isChatWith(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name).length >= 1;
    }
  }

  getLastTimeFrom(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name)[
        this.Friends_Chat_List.get(Name).length - 1
      ].time;
    }
  }

  AddNewFriend(Name) {
    if (!this.IsYourFriend(Name)) {
      this.Friends_Chat_List.set(Name, []);
      console.log(this.getName() + " add " + Name);

      //   users
      //     .get(Name)
      //     .Friends_Chat_List.set(this.Name, this.Friends_Chat_List.get(Name));
    }
    return "OK";
  }

  AddNewMsgTo(Name, text, time) {
    if (this.IsYourFriend(Name)) {
      this.Friends_Chat_List.get(Name).push({
        from: this.getName(),
        to: Name,
        text: text,
        time: time,
      });
    }
  }

  AddNewMsgFrom(Name, text, time) {
    if (this.IsYourFriend(Name)) {
      this.Friends_Chat_List.get(Name).push({
        from: Name,
        to: this.getName(),
        text: text,
        time: time,
      });
    }
  }
}

export default User;
