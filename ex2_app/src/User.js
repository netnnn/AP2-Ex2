class User {
  constructor(props) {
    var Name = props.Name;
    var Password = props.Password;
    var Nickname = props.Nickname;
    var Picture = props.picture;
    var Friends_list = new Map();
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

  IsYourFriend(Name) {
    return this.Friends_list.get(Name) != null;
  }

  getLastMsgFrom(Name) {
    if (IsYourFriend(Name)) {
      return this.Friends_list.get(Name).Chat[-1].text;
    }
  }

  getLastTimeFrom(Name) {
    if (IsYourFriend(Name)) {
      return this.Friends_list.get(Name).Chat[-1].time;
    }
  }

  AddNewMsgFrom(Name, text, time) {
    if (IsYourFriend(Name)) {
      this.Friends_list(Name).Chat.push({
        from: this.getName,
        to: Name,
        text: text,
        time: time,
      });
    }
  }
}

export default User;
