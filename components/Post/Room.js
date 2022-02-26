import React,{useState,useEffect} from 'react';
import RoomCSS from "./room.module.css";
import { RiVideoAddFill } from "react-icons/ri";
import { auth } from '../../firebase';

const room = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4")
      .then(res => res.json())
      .then(datass => setDatas(datass.results))
  }, []);




  return (
    <div className={RoomCSS.container}>
        <div className={RoomCSS.room}>
          <RiVideoAddFill style={{color: "#C25FBE"}}/>
          <p>Create room</p>
        </div>

        {datas && datas.map((elem, i) => {
        return (
          <img key={i} src={elem?.picture.medium} />
        );
      })}
    </div>
  );
};

export default room;
