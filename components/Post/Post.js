import React from 'react';
import PostCSS from "./post.module.css";
import { FaRegThumbsUp } from "react-icons/fa"; 
import { BiComment } from "react-icons/bi"; 
import { RiShareForwardLine } from "react-icons/ri"; 

const post = ({names,img,postTitle,postPic,time}) => {
  return (
    <div className={PostCSS.box}>
      <div className={PostCSS.head}>
        <img src={img} />
        <div className={PostCSS.name}>
          <p>{names}</p>
          <p className={PostCSS.time}>{time}</p>
        </div>
      </div>
      <div className={PostCSS.body}>
        <p className={PostCSS.para}>{postTitle}</p>
        <img src={postPic} />
      </div>
      <div className={PostCSS.footer}>
        <div className={PostCSS.iconCont}>
          <FaRegThumbsUp />
          <p>Like</p>
        </div>
        <div className={PostCSS.iconCont}>
          <BiComment />
          <p>Comment</p>
        </div>
        <div className={PostCSS.iconCont}>
          <RiShareForwardLine />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default post;
