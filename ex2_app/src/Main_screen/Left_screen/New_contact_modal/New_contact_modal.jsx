import "./New_contact_modal.css";
import users from "../../../Users_data/Users";
import { useRef, useEffect } from "react";

function New_contact_modal(props) {
  const contactInput = useRef(null);
  const close = useRef(null);
  const btn = useRef(null);

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
    contactInput.current.addEventListener("keypress", function (event) {
      PressEnter(event);
    });
  });

  function addContact() {
    var name = contactInput.current.value;
    if(users.get(name) == null ) {
      console.log("no such contact");

      return ///no such contact
    }

    if (users.get(props.LoggedUser).IsYourFriend(name)) {
      console.log("already your friend");
      return ///already your friend
    }
    users.get(name).AddNewFriend(props.LoggedUser);
    users.get(props.LoggedUser).AddNewFriend(name);
    contactInput.current.value = "";
    close.current.click()

    props.setState(!props.state);

  }
  
  
  
  return (
    <>
      <div
        className="modal fade"
        id="add_new_contact_modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add new contact
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={close}
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Contact's identifier"
                ref={contactInput}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                id="cancel"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
              ref={btn}
                type="button"
                id="add"
                className="btn btn-warning"
                onClick={() => {
                  addContact();
                }}
              >
                Add contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default New_contact_modal;
