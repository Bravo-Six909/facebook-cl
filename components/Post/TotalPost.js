import React, { useEffect, useState } from 'react';
import Post from './Post';

const totalPost = () => {

    const [postData, setPostData] = useState([]);
    const [postPic, setPostPic] = useState([]);

    useEffect(() => {
       fetch("https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA")
            .then(res => res.json())
            .then(datass => {
                setPostPic(datass)
        })
    }, []);



    return (
        <>
            { postPic && postPic.map((elem,i) => {
                return (
                    <Post key={i} names={postPic[i]?.user.name} img={postPic[i]?.user.profile_image.large} postTitle={postPic[i]?.alt_description} postPic={postPic[i]?.urls.full} time={postPic[i].created_at} />
                );
            })}
        </>
    );
};

export default totalPost;
