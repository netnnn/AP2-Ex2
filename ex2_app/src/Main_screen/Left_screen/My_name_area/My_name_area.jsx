import "./My_name_area.css";

function My_name_area() {
  return (
    <>
      <div id="my_name_area" className="">
        <img src="https://c4.wallpaperflare.com/wallpaper/106/962/482/death-note-lawliet-l-black-background-simple-wallpaper-preview.jpg"></img>
        <span id="my_name">L</span>
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
      {/* <!-- #type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" --> */}
    </>
  );
}

export default My_name_area;
