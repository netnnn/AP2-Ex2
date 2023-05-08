import User from "../User";
const users = new Map();

users.set(
  "Unknown",
  new User({
    Name: "Unknown",
    Password: "lll",
    Nickname: "L",
    Picture: "L-Profiler.jpg",
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

// users.set("Unknown", {
//   Password: "lll",
//   Nickname: "L",
//   Picture: "L-Profiler.jpg",
//   FriendsList: new Map(),
// });

// users.set("yagami", {
//   Password: "yyy",
//   Nickname: "light",
//   Picture: "yagami.jpg",
//   FriendsList: new Map(),
// });

// users.set("misa", {
//   Password: "mmm",
//   Nickname: "misa-misa",
//   Picture: "misa.jpg",
//   FriendsList: new Map(),
// });

// users.set("watari", {
//   Password: "www",
//   Nickname: "W",
//   Picture: "watari.jpg",
//   FriendsList: new Map(),
// });

// users.set("matsuda", {
//   Password: "mmm",
//   Nickname: "touta",
//   Picture: "matsuda.jpg",
//   FriendsList: new Map(),
// });

console.log(users.get("watari"))
console.log()
console.log()
console.log()

users.get("watari").AddNewFriend("L");
users.get("watari").AddNewFriend("yagami");
users.get("watari").AddNewFriend("misa");
// users.get("L").AddNewFriend("watari");
// users.get("yagami").AddNewFriend("watari");
// users.get("misa").AddNewFriend("watari");





export default users;
