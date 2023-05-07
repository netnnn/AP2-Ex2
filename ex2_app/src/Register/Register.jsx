import "./Register.css";
import users from "../Users_data/Users";

import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Register() {
  const Name_input = useRef(null);
  const Password_input = useRef(null);
  const Verify_password_input = useRef(null);
  const Nickname_input = useRef(null);
  const Picture_input = useRef(null);
  const Enter_link = useRef(null);
  const btn = useRef(null);
  let imagesArray = [];

  function PressEnter(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key == "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      btn.current.click();
    }
  }

  useEffect(() => {
    Name_input.current.addEventListener("keypress", function (event) {
      PressEnter(event);
    });
    Password_input.current.addEventListener("keypress", function (event) {
      PressEnter(event);
    });
    Verify_password_input.current.addEventListener(
      "keypress",
      function (event) {
        PressEnter(event);
      }
    );
    Nickname_input.current.addEventListener("keypress", function (event) {
      PressEnter(event);
    });
    Picture_input.current.addEventListener("keypress", function (event) {
      PressEnter(event);
    });
  });

  function displayImages() {
    let images = "";
    imagesArray.forEach((image, index) => {
      images = `<div class="image">
                  <img src="${URL.createObjectURL(image)}" alt="image">
                </div>`;
    });
    document.getElementsByTagName("output")[0].innerHTML = images;
  }

  const validation = function () {
    if (
      Name_input.current.value == "" ||
      Password_input.current.value == "" ||
      Verify_password_input.current.value == "" ||
      Nickname_input.current.value == "" ||
      Picture_input.current.value == ""
    ) {
      console.log("one or more fields are empty");
      return;
    }
    if (users.get(Name_input.current.value) != null) {
      console.log("Name already taken");
      return;
    }
    if (Password_input.current.value != Verify_password_input.current.value) {
      console.log("passwords are not identicle");
      return;
    }

    users.set(Name_input.current.value, {
      Password: Password_input.current.value,
      Nickname: Nickname_input.current.value,
      Picture: Picture_input.current.value,
    });
    console.log("user added succesfuly!");
    Enter_link.current.click();
  };

  return (
    <>
      <Link to="/" ref={Enter_link}></Link>
      <div id="upperBlock">
        <img id="logo" src="Barmats-Web.png" alt="logo"></img>
      </div>
      <div id="lowerBlock"></div>
      <div id="Register-container">
        <div className="row">
          <label htmlFor="inputName" className="col-sm-3 col-form-label">
            Name
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="inputName"
              ref={Name_input}
            ></input>
          </div>
        </div>

        <div className=" row">
          <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
            Password
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              ref={Password_input}
            ></input>
          </div>
        </div>

        <div className="row">
          <label
            htmlFor="inputVerifyPassword"
            className="col-sm-3 col-form-label"
          >
            Verify Password
          </label>
          <div className="col-sm-9">
            <input
              type="password"
              className="form-control"
              id="inputVerifyPassword"
              ref={Verify_password_input}
            ></input>
          </div>
        </div>

        <div className="row">
          <label htmlFor="inputDisplayName" className="col-sm-3 col-form-label">
            Nickname
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="inputDisplayName"
              ref={Nickname_input}
            ></input>
          </div>
        </div>

        <div className="row">
          <label htmlFor="inputPicture" className="col-sm-3 col-form-label">
            Picture
          </label>
          <div className="col-sm-9">
            <input
              type="file"
              className="form-control"
              id="inputPicture"
              accept="image/*"
              ref={Picture_input}
              onChange={() => {
                const file = Picture_input.current.files;
                imagesArray.push(file[0]);
                displayImages();
              }}
            ></input>
          </div>
          <output id="Image_div"></output>
        </div>

        <div id="loginBlock" className="mb-4 row">
          <button
            ref={btn}
            id="login"
            className="btn btn-success col-sm-4"
            onClick={validation}
          >
            Sign up
          </button>
          <div className="register">
            Already registered? <Link to="/">click here</Link> to login
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
