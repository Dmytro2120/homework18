import React from "react";
import './post.css'
import AnakinImg from '../photo/Anakin.jpg'



const Post = ({data}) => {
    const {PostAuthor, content, image, date} = data;

    return (
        <div className="stylePost">
            <div className="styleHead">
                <div>
                    <img className="styleImgIcon" src= {PostAuthor.photo} alt = "AnakinImg" />
                </div>
                <div className="styleHeadText">
                {`${PostAuthor.name}  ${PostAuthor.nickname}  ${date}`}
                    <p className="postContent">
                        {content}
                    </p>

                </div>
            </div>
            <div className="styleImgPost" scr={image} />
        </div>
    )
}

export default Post;