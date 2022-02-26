import React, { useState } from 'react';
import LogCSS from "./Log.module.css";
import { MdFacebook } from "react-icons/md";
import Head from 'next/head';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';

const log = () => {

  const LoginWithFacebook = () => {
    signInWithPopup(auth, provider)
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Head>
        <title>Facebook | Login</title>
        <link rel="icon" href="/facebook_ico.ico" />
      </Head>
      <div className={LogCSS.container}>
        <div className={LogCSS.logo}>
          <div className={LogCSS.cont}>
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
            <p>Facebook helps you connect and share<br /> with the people in your life.</p>
          </div>
        </div>
        <div className={LogCSS.forms}>
          <div className={LogCSS.card}>
            <MdFacebook size={120} color="#1876f0" />
            <div onClick={LoginWithFacebook} className={LogCSS.logbtn}>
              <MdFacebook size={40} />
              <p>Login With Facebook</p>
            </div>
          </div>
          <div className={LogCSS.link}>
            <a href="#">Create a Page</a><span> for a celebrity, brand or business.</span>
          </div>
        </div>
      </div>
    </>
  );

}

export default log;
