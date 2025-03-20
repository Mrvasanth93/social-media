import "./Post.css"
import img1 from "../../assets/1.avif"
import img2 from "../../assets/2.avif"
import img3 from "../../assets/4.avif"
import likebtn from "../../assets/btn`s/icons8-heart-26.png"

const Post = () =>{
    return(
        <div className="posts">
            <div className="create-post">
                <div className="text-post">
                    <div className="profile-pic">P</div>
                    <div className="post-text">
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <hr/>
                <div className="multi-media-post">
                    <div className="multi-media">
                        <div><h5>📄 Img</h5></div>
                        <div><h5>💌 Gif</h5></div>
                        <div><h5>🗂️ Attachment</h5></div>
                    </div>
                    <div className="post-btn">
                        <h5>Post</h5>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="header">
                    <div className="profile-details">
                        <div className="profile-pic"><h5>P</h5></div>
                        <div className="name-desc">
                            <div className="name"><h5>Name</h5></div>
                            <div className="details"><h5>Hello everyone</h5></div>
                        </div>
                    </div>
                    <div className="follow-btn">
                        <div><h5>Follow</h5></div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-content">
                        <div className="like-btn">
                            <img src={likebtn} alt="" />
                            <h5>21</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="header">
                    <div className="profile-details">
                        <div className="profile-pic"><h5>P</h5></div>
                        <div className="name-desc">
                            <div className="name"><h5>Name</h5></div>
                            <div className="details"><h5>Hello everyone</h5></div>
                        </div>
                    </div>
                    <div className="follow-btn">
                        <div><h5>Follow</h5></div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-content">
                        <div className="like-btn">
                            <img src={likebtn} alt="" />
                            <h5>21</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="header">
                    <div className="profile-details">
                        <div className="profile-pic"><h5>P</h5></div>
                        <div className="name-desc">
                            <div className="name"><h5>Name</h5></div>
                            <div className="details"><h5>Hello everyone</h5></div>
                        </div>
                    </div>
                    <div className="follow-btn">
                        <div><h5>Follow</h5></div>
                    </div>
                </div>
                <div className="content">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-content">
                        <div className="like-btn">
                            <img src={likebtn} alt="" />
                            <h5>21</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;