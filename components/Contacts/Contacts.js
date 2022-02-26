import React from 'react';
import ContactCSS from "./contact.module.css";
import { MdVideoCall } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSearch,FiMoreHorizontal } from "react-icons/fi";
import Contactlist from './Contactlist';


const contacts = () => {
  return (
    <div className={ContactCSS.contact_container}>
        <div className={ContactCSS.container}>
          <div className={ContactCSS.head}>
            <h2>Contacts</h2>
          </div>
          <div className={ContactCSS.icons}>
            <MdVideoCall />
            <FiSearch />
            <FiMoreHorizontal />
          </div>
        </div>
        <div>
          <Contactlist />
          <Contactlist />
        </div>
        <hr className={ContactCSS.line} />
        <div className={ContactCSS.group}>
          <h4>Group conversations</h4>
          <div className={ContactCSS.add}>
            <div className={ContactCSS.icon}>
              <AiOutlinePlus className={ContactCSS.iconAdd}/>
            </div>
            <p>Create New Group</p>
          </div>
        </div>
    </div>
  );
}

export default contacts;
