import "./My_name_area.css";
import users from "../../../Users_data/Users";

function My_name_area(props) {
  return (
    <>
      <div id="my_name_area" className="">
        <img src={users.get(props.LoggedUser).getPicture()}></img>
        <span id="my_name">{users.get(props.LoggedUser).getNickname()}</span>
        <button
          id="add_button"
          type="button"
          className="btn btn-dark btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#add_new_contact_modal"
          aria-hidden="true"
        >
          <i className="bi bi-person-add"></i>
        </button>
      </div>
    </>
  );
}

export default My_name_area;
