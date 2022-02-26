import React, { useEffect, useState } from 'react';
import ContactlistCSS from "./contactlist.module.css";

const Contactlist = () => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=2")
      .then(res => res.json())
      .then(datass => setDatas(datass.results))
  }, []);

  return (
    <>
      {datas && datas.map((elem, i) => {
        return (
          <div className={ContactlistCSS.tiles} key={i}>
            <div className={ContactlistCSS.imgs}>
              <img className={ContactlistCSS.img} src={elem?.picture.medium} />
              <div className={ContactlistCSS.online}></div>
            </div>
            <p className={ContactlistCSS.para}>
              {`${elem?.name.first} ${elem?.name.last}`}</p>
          </div>
        );
      })}

      </>
  )
};

export default Contactlist;
