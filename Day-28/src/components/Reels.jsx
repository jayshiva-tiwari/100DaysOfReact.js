import { RiHeartLine } from "@remixicon/react";
import { RiMessageLine } from "@remixicon/react";
import { RiShareForwardLine } from "@remixicon/react";
import { RiMoreFill } from "@remixicon/react";
import { RiHeartFill } from "@remixicon/react"
import '../style/reels.css'
import { AudioLines } from "./AudioLines";
import { useState } from 'react'
import { useRef } from "react";

function Reels(data) {
    const videoRef = useRef(null);
    const [like, setLike] = useState(false)
    const [follow, setFollow] = useState(false)
    const  [isPlaying, setIsPlaying] = useState(true)

    const togglePlay = ()=>{
        if (isPlaying){
            videoRef.current.pause()
        }else{
            videoRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    const toggleFollow = () => {
        setFollow(!follow)
    }

    const toggleLike = () => {
        setLike(!like)
    }

    return (
        <div className="reel">
            <video ref={videoRef} src={data.video} autoPlay loop className="mainContent" onClick={togglePlay}></video>
            <div className="bottomSection">
                <div className="upper">
                    <img src={data.userImage} alt="" className="dp" />
                    <p className="pfpName">{data.username}</p>
                    <button className="follow" onClick={toggleFollow} >{follow ? "Unfollow" : "Follow"}</button>
                </div>
                <div className="lower">
                    <p className="caption">{data.caption}</p>
                </div>
            </div>
            <div className="rightSection">
                <div className="like" onClick={toggleLike}>
                    {like ? 
                    <RiHeartFill
                        // size={36} // set custom `width` and `height`
                        color="Red" // set `fill` color
                        className="my-icon" // add custom class name
                    /> :
                    <RiHeartLine
                        // size={36} // set custom `width` and `height`
                        // color="" // set `fill` color
                        className="my-icon" // add custom class name
                    />

                    }
                    
                    <p className="likeCount">{like ? data.likes + 1 : data.likes}</p>
                </div>
                <div className="comment">
                    <RiMessageLine
                        // size={36} // set custom `width` and `height`
                        // color="" // set `fill` color
                        className="my-icon" // add custom class name
                    />
                    <p className="commentCount">{data.comments}</p>
                </div>
                <div className="share">
                    <RiShareForwardLine
                        // size={36} // set custom `width` and `height`
                        // color="" // set `fill` color
                        className="my-icon" // add custom class name
                    />
                    <p className="shareCount">{data.shares}</p>
                </div>
                <div className="more">
                    <RiMoreFill
                        // size={36} // set custom `width` and `height`
                        // color="white" // set `fill` color
                        className="myIconMenu" // add custom class name
                    />
                </div>
                <div className="music">
                    <AudioLines className="musicIcon" />
                    <img className="musicImg" src={data.musicImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reels
