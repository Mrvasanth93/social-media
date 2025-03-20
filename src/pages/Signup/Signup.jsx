import "./signup.css"
const Signup = () => {
    return (
        <div className="login">
            <div className="signup-form">
                <div className="form">
                    <h5>welcome to Social media</h5>
                    <div className="name">
                        <div>
                            <h5>First name</h5>
                            <input type="text" />
                        </div>
                        <div>
                            <h5>Last name</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="email">
                        <div>
                            <h5>Email</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="password">
                        <div>
                            <h5>password</h5>
                            <input type="text" />
                        </div>
                        <div>
                            <h5>Confirm passwrod</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="register">
                        <div>
                            <div>Register</div>
                        </div>
                    </div>
                    <h5 className="login"><a href="">continue with login</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Signup;