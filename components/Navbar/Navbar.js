import React from 'react';
import NavBarCSS from "./navbar.module.css";
import { BsFillPeopleFill, BsMessenger, BsFillBellFill, BsFacebook } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { MdOndemandVideo } from "react-icons/md";
import { GiHut } from "react-icons/gi";
import { SiFacebookgaming } from "react-icons/si";
import { CgProfile, CgMenuGridO } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Image from 'next/image';
import { signOut } from 'firebase/auth';

const navbar = () => {
    const [user] =useAuthState(auth);
    const signOutAuth = () => {
        signOut(auth);
    }

    return (
        <>
            <nav className={NavBarCSS.navbar}>
                <ul className={NavBarCSS.menu}>
                    <li className={`${NavBarCSS.list} ${NavBarCSS.searchBar}`}>
                        <BsFacebook className={NavBarCSS.facebookLogo} />
                        <div className={NavBarCSS.search}>
                            <BiSearch className={NavBarCSS.searchIcon} />
                            <input placeholder='Search Facebook' />
                        </div>
                    </li>


                    <li className={`${NavBarCSS.list} ${NavBarCSS.tabBar}`}>
                        <div className={`${NavBarCSS.icon_container} ${NavBarCSS.active}`}>
                            <HiHome className={NavBarCSS.MenuIcon} />
                        </div>
                        <div className={`${NavBarCSS.icon_container}`}>
                            <BsFillPeopleFill className={NavBarCSS.MenuIcon} />
                        </div>
                        <div className={`${NavBarCSS.icon_container}`}>
                            <MdOndemandVideo className={NavBarCSS.MenuIcon} />
                        </div>
                        <div className={`${NavBarCSS.icon_container}`}>
                            <GiHut className={NavBarCSS.MenuIcon} />
                        </div>
                        <div className={`${NavBarCSS.icon_container}`}>
                            <SiFacebookgaming className={NavBarCSS.MenuIcon} />
                        </div>
                    </li>


                    <li className={`${NavBarCSS.list} ${NavBarCSS.actions}`}>
                        <div onClick={signOutAuth} className={NavBarCSS.profiles}>
                            <img src={user?.photoURL} height={20} width={20} />
                            <p>{user?.displayName}</p>
                        </div>
                        <div className={NavBarCSS.background}>
                            <CgMenuGridO />
                        </div>
                        <div className={NavBarCSS.background}>
                            <BsMessenger />
                        </div>
                        <div className={NavBarCSS.background}>
                            <BsFillBellFill />
                        </div>
                        <div className={NavBarCSS.background}>
                            <IoMdArrowDropdown />
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default navbar;
