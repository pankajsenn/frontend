import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'
function Header(){
    return (
    <>
      <nav className="header">
       <section className='logo'><img src={require('../../images/logopart1.png')}/><span className='logopart2'>instaclone</span></section>
       <Link to={"/Postform"}>
       <section className='camera-icon'> <img src={require("../../images/camera.jpg")} alt="camera" height="70px" width="90px"/> </section>
       </Link>
      </nav>
    </>
    )
}
export default Header;