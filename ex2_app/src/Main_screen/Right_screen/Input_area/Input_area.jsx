function Input_area() {
  return (
    <>
      <div id="input_area">
        <input
          className="col-9 col-xl-11 col-lg-10 col-md-10 col-sm-10"
          type="text"
          placeholder="New message here..."
        ></input>
        <button className="btn btn-primary">
          <i className="bi bi-send"></i>
        </button>
      </div>
    </>
  );
}

export default Input_area;
