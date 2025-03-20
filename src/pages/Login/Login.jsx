import "./login.css"
const Login = () => {
    return (
        <div className="login">
            <div className="signup-form">
                <div className="form">
                    <h5>welcome to Social media</h5>
                    <div className="login-email">
                        <div>
                            <h5>Email</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="login-password">
                        <div>
                            <h5>password</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="register">
                        <div>
                            <div>Login</div>
                        </div>
                    </div>
                    <h5 className="login"><a href="">Don`t have an account? signup here</a></h5>
                </div>
            </div>
        </div>
    )
}

export default Login;