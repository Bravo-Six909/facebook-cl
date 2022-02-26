import React from 'react';
import AboutCSS from "./about.module.css";
import Aboutlist from './Aboutlist';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const about = () => {

  const [user] = useAuthState(auth);

  return (
    <div className={AboutCSS.container}>
      <div className={AboutCSS.head}>
        <img src={user?.photoURL} height={40} width={40} />
        <h4>{user?.displayName}</h4>
      </div>
      <div className={AboutCSS.box}>
        <Aboutlist title="Friends" img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" />
      </div>

      <div className={AboutCSS.box}><Aboutlist title="Groups" img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Marketplace" img="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Watch" img="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Memories" img="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Saved" img="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Pages" img="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Events" img="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/eXC82ZeepQ7.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="Jobs" img="https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/XxEsb0x8INQ.png" /></div>

      <div className={AboutCSS.box}><Aboutlist title="More recent" img="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png" /></div>

      <div className={AboutCSS.see}>
        <div>
          <MdKeyboardArrowDown className={AboutCSS.seeIcon} />
        </div>
        <p>See More</p>
      </div>

    </div>
  );
};

export default about;
