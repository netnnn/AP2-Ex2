import User from "../User";
const users = new Map();

users.set(
  "Unknown",
  new User({
    Name: "Unknown",
    Password: "lll",
    Nickname: "L",
    Picture: "L-Profile.jpg",
  })
);

users.set(
  "yagami",
  new User({
    Name: "yagami",
    Password: "yyy",
    Nickname: "light",
    Picture: "yagami.jpg",
  })
);

users.set(
  "misa",
  new User({
    Name: "misa",
    Password: "mmm",
    Nickname: "misa-misa",
    Picture: "misa.jpg",
  })
);

users.set(
  "watari",
  new User({
    Name: "watari",
    Password: "www",
    Nickname: "W",
    Picture: "watari.jpg",
  })
);

users.set(
  "matsuda",
  new User({
    Name: "matsuda",
    Password: "mmm",
    Nickname: "touta",
    Picture: "matsuda.jpg",
  })
);

console.log(users);
console.log();
console.log();

const WW = users.get("watari");
const LL = users.get("Unknown");
const MM = users.get("misa");
const YY = users.get("yagami");

WW.AddNewFriend("Unknown");
LL.AddNewFriend("watari");

WW.AddNewFriend("yagami");
YY.AddNewFriend("watari");

WW.AddNewFriend("misa");
MM.AddNewFriend("watari");

WW.AddNewMsgFrom("Unknown", "hello W, i'm L", "15:30");
LL.AddNewMsgTo("watari", "hello W, i'm L", "15:30");

LL.AddNewMsgFrom("watari", "hello L, i'm W", "15:30");
WW.AddNewMsgTo("Unknown", "hello L, i'm W", "15:30");

WW.AddNewMsgFrom("misa", "hello W, i'm misa", "15:30");
MM.AddNewMsgTo("watari", "hello W, i'm misa", "15:30");

MM.AddNewMsgFrom("watari", "hello misa, i'm W", "15:30");
WW.AddNewMsgTo("misa", "hello misa, i'm W", "15:30");



export default users;
