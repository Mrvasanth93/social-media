import "./nav.css"
import menubar from "../../assets/btn`s/icons8-menu-bar-48.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const [sideBar, setSideBar] = useState(false)
    const handleMenuBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <>
            <div className="nav" >
                <div onClick={() => { navigate("/") }} className="name">Social Media</div>
                <div onClick={() => { navigate("/serch") }} className="serch">
                    <input className="serch" type="text" />
                    <div className="serch-btn">
                        <h5>Serch</h5>
                    </div>
                </div>
                <div className="option">
                    {
                        location.pathname != "/notification" &&
                        <div onClick={()=>{navigate("/notification")}} className="option-1">
                            <h5><Link className="link" to="/notification">Notification</Link></h5>
                        </div>
                    }
                    {
                        location.pathname != "/profile" && location.pathname != "/" &&
                        <div onClick={()=>{navigate("/profile")}} className="option-1">
                            <h5><Link className="link" to="/profile">profile</Link></h5>
                        </div>
                    }
                    <div onClick={handleMenuBar} className="option-4">
                        {
                            sideBar ? <h5 className="sidebar-btn">&times;</h5> :
                                <img src={menubar} alt="" />
                        }
                    </div>
                </div>
            </div>
            {
                sideBar && <div className="sidebar">
                    <div className="sidebar-content">
                        <div onClick={() => { navigate("/"); handleMenuBar() }} className="content"><h5><Link className="link" to="/">Home</Link></h5></div>
                        <div onClick={() => { navigate("/profile"); handleMenuBar() }} className="content"><h5><Link className="link" to="/profile">profile</Link></h5></div>
                        <div onClick={() => { navigate("/notification"); handleMenuBar() }} className="content"><h5>Notifications</h5></div>
                        <div onClick={() => { navigate("/serch"); handleMenuBar() }} className="content"><h5>Serch</h5></div>
                        <div onClick={() => { navigate("/signup"); handleMenuBar() }} className="content"><h5>Logout</h5></div>
                    </div>
                </div>
            }
        </>
    )
}
export default Nav;