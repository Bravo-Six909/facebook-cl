import React from 'react';
import { BsPersonCheck } from "react-icons/bs"; 
import { BsFillPeopleFill } from "react-icons/bs";
import AboutListCSS from "./aboutlist.module.css";


const aboutlist = (props) => {
  return (
    <div className={AboutListCSS.tile}>
        <img className={AboutListCSS.icon} src={props.img}/>
        <p>{props.title}</p>
    </div>
  );
};

export default aboutlist;
