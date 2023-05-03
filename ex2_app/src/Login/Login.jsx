import "./Login.css";
import users from "../Users_data/Users";

import { Link } from "react-router-dom";
import { useRef } from "react";



function Login() {
  const Name_input = useRef(null);
  const Password_input = useRef(null);
  const Enter_link = useRef(null);

  const validation = function(){
    
    if (Name_input.current.value == "" || Password_input.current.value == "") {
      return;
    }
    if (users.get(Name_input.current.value) == null) {
      return; //password or username are incorrect
    }
    if (users.get(Name_input.current.value).Password == Password_input.current.value ){
      console.log("yes");
      Enter_link.current.click();

    }else{
      console.log("no"); //password or username are incorrect
    }

  } 
  
  

  return (
    <>
    <Link to="/Main_screen" ref={Enter_link}></Link>
      <div id="upperBlock">
        <img id="logo" src="Barmats-Web.png" alt="logo"></img>
      </div>
      <div id="lowerBlock"></div>
      <div id="container">
        <div className="mb-4 row">
          <label for="inputName" className="col-sm-3 col-form-label">
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
        <div className="mb-4 row">
          <label for="inputPassword" className="col-sm-3 col-form-label">
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
        <div className="mb-4 row center">
          <button className="btn btn-success col-sm-4" onClick={validation}>
            Login
          </button>
          <div className="register">
          Not registered? <Link to="/Register">click here</Link> to register
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
