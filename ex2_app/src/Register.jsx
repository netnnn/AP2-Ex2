import './Register.css'

function Register() {
    return ( 
        <>
         <div id="upperBlock">
                <img id="logo" src="Barmats-Web.png" alt="logo"></img>
            </div>
            <div id="lowerBlock"></div>
            <div id="container">

               <div className="row">
                    <label for="inputName" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputName"></input>
                    </div>
                </div>
                
                <div className=" row">
                    <label for="inputPassword" className="col-sm-3 col-form-label">Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" id="inputPassword"></input>
                    </div>
                </div>
                
                <div className="row">
                    <label for="inputVerifyPassword" className="col-sm-3 col-form-label">Verify Password</label>
                    <div className="col-sm-9">
                        <input type="password" className="form-control" id="inputVerifyPassword"></input>
                    </div>
                </div>
                
                <div className="row">
                    <label for="inputDisplayName" className="col-sm-3 col-form-label">Nickname</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputDisplayName"></input>
                    </div>
                </div>

                <div className="row">
                    <label for="inputPicture" className="col-sm-3 col-form-label">Picture</label>
                    <div className="col-sm-9">
                        <input type="file" className="form-control" id="inputPicture" accept="image/*"></input>
                    </div>
                    <img src="https://otakuusamagazine.com/wp-content/uploads/2021/10/light-death-note-480x360.jpeg" alt="example image upload"></img>
                </div>

                <div id="loginBlock" className="mb-4 row">
                    <button id="login" className="btn btn-success col-sm-4">Sign up</button>
                    <div className="register">
                        Already registered? click <a href="login.html">here</a> to login
                    </div>
                </div>

            </div>
        </>
     );
}

export default Register;