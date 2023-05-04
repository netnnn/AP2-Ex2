import { useRef, useState, useEffect } from "react";
import the_list from "../../../Chats";

function Input_area(props) {
  const input = useRef(null);
  const btn_ref = useRef(null);

  useEffect(() => {
    input.current.addEventListener("keypress", function (event) {
      // If the user presses the "Enter" key on the keyboard
      if (event.key == "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn_ref.current.click();
      }
    });
  });

  function Send_msg() {
    if (input.current.value == "") {
      return;
    }
    if (input.current.value.split(" ").join("") == "") {
      return;
    }

    let currDate = new Date();
    let NowTime = currDate.getHours() + ":" + currDate.getMinutes();

    the_list.push({
      from: "Light",
      to: "L",
      text: input.current.value,
      time: NowTime,
    });

    props.setState(!props.state);
    input.current.value = "";
    console.log(props.state);
  }

  return (
    <>
      <div id="input_area">
        <input
          className="col-9 col-xl-11 col-lg-10 col-md-10 col-sm-10"
          type="text"
          placeholder="New message here..."
          ref={input}
        ></input>
        <button className="btn btn-primary" onClick={Send_msg} ref={btn_ref}>
          <i className="bi bi-send"></i>
        </button>
      </div>
    </>
  );
}

export default Input_area;
