import Nav from "../compononts/Nav"
import "./profile.css"
import img1 from "../../assets/1.avif"
import img2 from "../../assets/2.avif"
import img3 from "../../assets/3.avif"
import img4 from "../../assets/4.avif"
import img5 from "../../assets/5.avif"
import { useState } from "react"
import Following from "./Following"
import Followers from "./Followers"
const Profile = () => {
    const [page, setPage] = useState("posts")
    const updateBottomReder = (val) =>{
        setPage(val)
    }
    return (
        <>
            <div className="user-profile">
                <div className="user">
                    <h4 className="tittle">Profile </h4>
                    <div className="user-profile-top">
                        <div className="user-profile-img">
                        <img src={img4} alt="" />
                        </div>
                        <div className="user-profile-option">
                            <div className="post-count">
                                <div onClick={()=>updateBottomReder("posts")}><h5>Posts</h5></div>
                                <div><h6>20</h6></div>
                            </div>
                            <div  onClick={()=>updateBottomReder("following")} className="following-count">
                                <div><h5>Following</h5></div>
                                <div><h6>56</h6></div>
                            </div>
                            <div onClick={()=>updateBottomReder("followers")} className="follower-count">
                                <div><h5>Followers</h5></div>
                                <div><h6>59</h6></div>
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <div onClick={()=>updateBottomReder("update")}><h5>Update</h5></div>
                        <div><h5>Logout</h5></div>
                    </div>
                    <hr />
                    {
                        page == "posts" && <>
                            <h5 className="current-tittle">posts</h5>
                            <div className="posts">
                                <div><img src={img1} alt="" /></div>
                                <div><img src={img2} alt="" /></div>
                                <div><img src={img4} alt="" /></div>
                                <div><img src={img3} alt="" /></div>
                                <div><img src={img1} alt="" /></div>
                                <div><img src={img5} alt="" /></div>
                                <div><img src={img3} alt="" /></div>
                            </div>
                        </>
                    }
                    {
                        page == "followers" && <>
                            <Followers />
                        </>
                    }
                    {
                        page == "following" && <>
                            <Following />
                        </>
                    }
                    {
                        page == "update" &&
                        <>
                            <div className="user-fields">
                                <div className="user-name">
                                    <input type="text" />
                                </div>
                                <div className="full-name">
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="email">
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="country">
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="description">
                                    <textarea name="" id=""></textarea>
                                </div>
                            </div>
                            <div className="update">Update</div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
export default Profile