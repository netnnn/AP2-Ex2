// import users from "./Users_data/Users";

class User {
  constructor(props) {
    this.Name = props.Name;
    this.Password = props.Password;
    this.Nickname = props.Nickname;
    this.Picture = props.picture;
    this.Friends_Chat_List = new Map();
    // console.log(Name)
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

  IsYourFriend(Name) {
    return this.Friends_Chat_List.get(Name) != null;
  }

  getLastMsgFrom(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name)[-1].text;
    }
  }

  isChatWith(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name).length >= 1;
    }
  }

  getLastTimeFrom(Name) {
    if (this.IsYourFriend(Name)) {
      return this.Friends_Chat_List.get(Name)[-1].time;
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

  AddNewMsgFrom(Name, text, time) {
    if (this.IsYourFriend(Name)) {
      this.Friends_Chat_List(Name).push({
        from: this.getName,
        to: Name,
        text: text,
        time: time,
      });
    }
  }
}

export default User;
