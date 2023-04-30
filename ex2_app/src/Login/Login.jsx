import './Login.css'

function Login() {
  return (
    <>
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
            <input type="text" className="form-control" id="inputName"></input>
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
            ></input>
          </div>
        </div>
        <div className="mb-4 row">
          <button className="btn btn-success col-sm-4">Login</button>
          <div className="register">
            Not registered? click <a href="register.html">here</a> to register
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
