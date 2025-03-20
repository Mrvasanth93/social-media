import "./Serch.css"
import sample from "../../assets/1.avif"
import sample1 from "../../assets/2.avif"
import sample2 from "../../assets/3.avif"
const Serch = () => {
    return (
        <>
            <div className="serch-result">
                <div className="serch-result-content">
                    <div className="serch-box">
                        <input type="text" name="" id="" />
                        <div><h5>Serch</h5></div>
                    </div>
                    <h5 className="heading">Serch Resulsts</h5>
                    <div className="content">
                        <div className="content-left">
                            <div className="content-img">
                                <img src={sample} alt="" />
                            </div>
                            <div className="content-details">
                                <div><h6>Name</h6></div>
                                <div><h6>From this posts</h6></div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h5><span>+</span>Follow</h5>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-left">
                            <div className="content-img">
                                <img src={sample2} alt="" />
                            </div>
                            <div className="content-details">
                                <div><h6>Name</h6></div>
                                <div><h6>From this posts</h6></div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h5>Open</h5>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-left">
                            <div className="content-img">
                                <img src={sample1} alt="" />
                            </div>
                            <div className="content-details">
                                <div><h6>Name</h6></div>
                                <div><h6>From this posts</h6></div>
                            </div>
                        </div>
                        <div className="content-right">
                            <h5>See posts</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Serch;