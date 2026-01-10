import { useState } from "react";

export default function LikeButton(){

    const[liked,setLiked]=useState(false);
    const[click,setClick]=useState(0);

    function toggleLike(){
        setLiked(!liked);
        setClick(click+1);
    }
    let likeStyle={
        color:"red"
    }

    return(
        <div>
            <button onClick={toggleLike} >
                <i className={liked ? "fas fa-heart" : "far fa-heart"} style={likeStyle}></i>
                {liked ? "Unlike" : "Like"}

            </button>

            <p>{click} Likes</p>
            
        </div>
    )
}