import NavBar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import TotalPost from "../components/Post/TotalPost";
import Room from "../components/Post/Room";
import Contact from "../components/Contacts/Contacts";
import Mind from "../components/Post/Mind";
import Stories from "../components/Post/Stories/index.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook | Home</title>
        <link rel="icon" href="/facebook_ico.ico" />
      </Head>
      <NavBar className="nav_container" />
      <div className="main_container">
        <div className="about_container">
          <About />
        </div>
        <div className="post_container" >
          <div>
            <Stories />
          </div>
          <div className="mind_container">
            <Mind />
          </div>
          <div className="room_container">
            <Room />
          </div>
          <div>
            <TotalPost />
          </div>
        </div>

        <div className="contact_container">
          <Contact />
        </div>
      </div>
    </>
  )
}
