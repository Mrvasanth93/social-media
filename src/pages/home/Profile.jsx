import "./Profile.css";
import mail from "../../assets/btn`s/icons8-mail-48.png";
import location from "../../assets/btn`s/icons8-location-48.png";
import instgram from "../../assets/btn`s/icons8-instagram-32.png";
import linkedIn from "../../assets/btn`s/icons8-linkedin-48.png";
import github from "../../assets/btn`s/icons8-github-32.png";
const Profile = () => {
    return (
        <>
            <div className="profile-page">
                <div className="profile-top">
                    <div className="profile-top-left">
                        <div className="profile-top-left-left">
                            <h4>p</h4>
                        </div>
                        <div className="profile-top-left-right">
                            <div className="name"><h5>Name</h5></div>
                            <div className="about"><h6>Hello everyone</h6></div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="profile-middle-1">
                    <div className="item">
                        <div><img src={mail} alt="" /></div>
                        <h6>Mail id</h6>
                    </div>
                    <div className="item">
                        <div><img src={location} alt="" /></div>
                        <h6>Location</h6>
                    </div>
                </div>
                <hr style={{ marginTop: "3px" }} />
                <div className="profile-middle-2">
                    <div className="post_count">
                        <div>
                            <h6>No of Posts</h6>
                        </div>
                        <div>
                            <h6>20</h6>
                        </div>
                    </div>
                    <div className="follower_count">
                        <div>
                            <h6>No of Followers</h6>
                        </div>
                        <div>
                            <h6>20</h6>
                        </div>
                    </div>
                    <div className="following_count">
                        <div>
                            <h6>No of Following</h6>
                        </div>
                        <div>
                            <h6>20</h6>
                        </div>
                    </div>
                    <div></div>
                </div>
                <hr style={{ marginTop: "3px" }} />
                <div className="footer">
                    <h5>Social profiles</h5>
                </div>
                <div className="links">
                    <div className="profile-1">
                        <div className="link-img">
                            <img src={instgram} alt="" />
                        </div>
                        <div>
                            <h6>Hello</h6>
                        </div>
                    </div>
                    <div className="profile-2">
                        <div className="link-img">
                            <img src={linkedIn} alt="" />
                        </div>
                        <div>
                            <h6>20</h6>
                        </div>
                    </div>
                    <div className="profile-3">
                        <div className="link-img">
                            <img src={github} alt="" />
                        </div>
                        <div>
                            <h6>20</h6>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Profile;