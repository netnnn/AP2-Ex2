import './Main_screen.css'

function Main_screen() {
    return (
      <>
        <div id="container" className="row">
          <div id="left_screen" className="col col-4">
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

            <div id="my_chats_area">
              <div className="chat_tile ">
                <img src="https://wallpaperset.com/w/full/8/3/2/341421.jpg"></img>
                <div className="friend_name_and_last col">
                  <span>Yagamai Light</span>
                  <p className="last_msg">well, what's new?</p>
                </div>
                <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
              </div>
              <div className="chat_tile ">
                <img src="https://static.wikia.nocookie.net/deathnote/images/d/dd/Watari_symbol.jpg"></img>
                <div className="friend_name_and_last col">
                  <span>Watari</span>
                  <p className="last_msg">didn't you know?</p>
                </div>
                <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
              </div>
              <div className="chat_tile ">
                <img src="https://static.wikia.nocookie.net/deathnotefanon/images/b/be/-Misa-Amane-misa-amane-32669642-704-396.jpg"></img>
                <div className="friend_name_and_last col">
                  <span>Amane Misa</span>
                  <p className="last_msg">I love you!!!</p>
                </div>
                <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
              </div>
              <div className="chat_tile ">
                <img src="https://pm1.narvii.com/6728/8fc876eb9ccb548bd1a115cb354b08683c110756v2_00.jpg"></img>
                <div className="friend_name_and_last col">
                  <span>Touta matsuda</span>
                  <p className="last_msg">any new order? :)</p>
                </div>{" "}
                <span className="friend_time col-2">3/31/2021 3:21:21 PM</span>
              </div>
            </div>
          </div>
          <div id="right_screen" className="col col-8">
            <div id="corrent_chat_name_area">
              <img src="https://wallpaperset.com/w/full/8/3/2/341421.jpg"></img>
              <span className="friend_name col">Yagamai Light</span>
              <button className="btn btn-danger logout">
                <i className="bi bi-box-arrow-right"></i>
              </button>
            </div>

            <div id="chat_area">
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">Hello Kira, Im L</span>
                </div>
              </div>

              <div className="message_row yours">
                <div className=" message">
                  <span className="bubble_info">
                    Im not kira! I will prove it to you
                  </span>
                  <span className="bubble_time">15:30</span>
                </div>
              </div>
              <div className="message_row yours">
                <div className=" message">
                  <span className="bubble_info">
                    {" "}
                    Lock me up in a jail, if the killing wont stops than Im not
                    kira!{" "}
                  </span>
                  <span className="bubble_time">15:30</span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
              <div className="message_row mine">
                <div className=" message">
                  <span className="bubble_time">15:30</span>
                  <span className="bubble_info">
                    Hmmmmm interesting... Okay I will accept that.
                  </span>
                </div>
              </div>
            </div>

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
          </div>
        </div>

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

export default Main_screen;