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

function easy_new_friend(Name1, Name2){
  users.get(Name1).AddNewFriend(Name2);
  users.get(Name2).AddNewFriend(Name1);
}

function easy_msg(from, to, txt, time){
  users.get(to).AddNewMsgFrom(from, txt, time);
  users.get(from).AddNewMsgTo(to, txt, time);
}

console.log(users);
console.log();
console.log();

easy_new_friend("watari", "Unknown");
easy_new_friend("watari", "matsuda");
easy_new_friend("watari", "yagami");
easy_new_friend("watari", "misa");

easy_new_friend("matsuda", "misa");
easy_new_friend("matsuda", "Unknown");

easy_new_friend("Unknown", "yagami");

easy_new_friend("misa", "yagami");

// const WW = users.get("watari");
// const LL = users.get("Unknown");
// const MM = users.get("misa");
// const YY = users.get("yagami");

// WW.AddNewFriend("Unknown");
// LL.AddNewFriend("watari");

// WW.AddNewFriend("yagami");
// YY.AddNewFriend("watari");

// WW.AddNewFriend("misa");
// MM.AddNewFriend("watari");

easy_msg("watari", "Unknown", "hello W, i'm L", "15:30");
easy_msg("Unknown", "watari", "hello L, i'm W", "15:30");



// WW.AddNewMsgFrom("Unknown", "hello W, i'm L", "15:30");
// LL.AddNewMsgTo("watari", "hello W, i'm L", "15:30");

// LL.AddNewMsgFrom("watari", "hello L, i'm W", "15:30");
// WW.AddNewMsgTo("Unknown", "hello L, i'm W", "15:30");

// WW.AddNewMsgFrom("misa", "hello W, i'm misa", "15:30");
// MM.AddNewMsgTo("watari", "hello W, i'm misa", "15:30");

// MM.AddNewMsgFrom("watari", "hello misa, i'm W", "15:30");
// WW.AddNewMsgTo("misa", "hello misa, i'm W", "15:30");



export default users;
