import './New_contact_modal.css'

function New_contact_modal() {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="add_new_contact_modal"
        tabindex="-1"
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
              ></button>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Contact's identifier"></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
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
