import React from 'react';
import { MdVideoCameraFront } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import MindCSS from "./mind.module.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const mind = () => {

    const [user] = useAuthState(auth);
  return (
        <div className={MindCSS.container}>
            <div className={MindCSS.head}>
                <img src={user?.photoURL} />
                <div className={MindCSS.input}>
                    <input placeholder={`What's on your mind, ${user?.displayName}?`} />
                </div>
            </div>
            <hr className={MindCSS.line}/>
            <div className={MindCSS.icons}>
                <div className={MindCSS.iconContain}>
                    <MdVideoCameraFront className={MindCSS.icon} style={{color: "#e74c3c"}} />
                    <p>Live Video</p>
                </div>
                <div className={MindCSS.iconContain}>
                    <FaPhotoVideo className={MindCSS.icon} style={{color: "#2ecc71"}}/>
                    <p>Photo/video</p>
                </div>
                <div className={MindCSS.iconContain}>
                    <BsEmojiLaughing className={MindCSS.icon} style={{color: "gold"}}/>
                    <p>Feeling/activity</p>
                </div>
            </div>
        </div>
  );
}

export default mind;
