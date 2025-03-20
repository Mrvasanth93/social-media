import Nav from "../compononts/Nav.jsx"
import "./Home.css"
import Profile from "./Profile";
import Post from "./Post";
import FollowersAndSerch from "./Followandserch";
const Home = () => {
    return (
        <div className="body">
            <div className="main">
                <div className="profile">
                    <Profile/>
                </div>
                <div className="post">
                    <Post/>
                </div>
                <div className="followers">
                    <FollowersAndSerch/>
                </div>
            </div>
        </div>
    )
}
export default Home;