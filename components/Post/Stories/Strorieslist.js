import React, { useEffect, useState } from 'react';
import styles from "./Storieslist.module.css";

const Strorieslist = () => {

  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA")
      .then(res => res.json())
      .then(datas => setPic(datas))
  }, []);




  return (
    <>
    <div className={styles.container}>
      <div className={styles.box} style={{ backgroundImage: `url(${pic[0]?.urls.thumb})` }}>
        
        <div className={styles.img}>
          <img src={pic[0]?.user.profile_image.large} />
        </div>
        <div className={styles.name}>
          <p>{pic[0]?.user.name}</p>
        </div>
        
      </div>
      <div className={styles.box} style={{ backgroundImage: `url(${pic[1]?.urls.thumb})` }}>
        <div className={styles.img}>
          <img src={pic[1]?.user.profile_image.large} />
        </div>
        <div className={styles.name}>
          <p>{pic[1]?.user.name}</p>
        </div>
      </div>
      <div className={styles.box} style={{ backgroundImage: `url(${pic[2]?.urls.thumb})` }}>
        <div className={styles.img}>
          <img src={pic[2]?.user.profile_image.large} />
        </div>
        <div className={styles.name}>
          <p>{pic[2]?.user.name}</p>
        </div>
      </div>
      <div className={styles.box} style={{ backgroundImage: `url(${pic[3]?.urls.thumb})` }}>
        <div className={styles.img}>
          <img src={pic[3]?.user.profile_image.large} />
        </div>
        <div className={styles.name}>
          <p>{pic[3]?.user.name}</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Strorieslist;
