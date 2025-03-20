import "./Notification.css"
import sample from "../../assets/1.avif"
import sample1 from "../../assets/2.avif"
import sample2 from "../../assets/3.avif"
const Notification = () =>{
    return(
        <>
            <div className="notifications">
                <div className="notification-result">
                <h5 className="heading">Notifications For You</h5>
                    <div className="content">
                        <div className="content-left">
                            <div className="content-img">
                                <img src={sample} alt="" />
                            </div>
                            <div className="content-details">
                                <div><h6>Someone liked your post</h6></div>
                                <div><h6>10 hr ago</h6></div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h5>&times;</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification;