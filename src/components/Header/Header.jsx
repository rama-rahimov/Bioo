import React, { useState } from 'react';
import 'react-bootstrap'
import s from './Header.module.css' ;
import imgLush from '../../assets/Mask group.png' ;
import videoIMg from '../../assets/Vector.png' ;
import arrUp from '../../assets/arrUpp.svg' ;
import arrDown from '../../assets/arrDown.svg' ;
import fr from '../../assets/FR.svg';
import en from '../../assets/EN.svg';
import es from '../../assets/ES.svg';
import yap from '../../assets/JP.svg';

const Header = () => {
  const [arrow, setArrow] = useState(false);
  const [leng, setLeng] = useState("English");
  return (
    <div  className="page_body page_body_light" style={{ width:"100%"}}>
      <div style={{width:"100%", height:"100vh"}} className={s.imggggess}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{paddingTop:"50px", paddingBottom:"170px"}}>
  <img className={s.imgLush} src={imgLush} alt="lush" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className={s.navvv} id="navbarSupportedContent">
    <div >
    <div className={s.countr} onClick={() => setArrow(e => !e)}>
      <p className={s.lenguege}>{leng}</p>
      {arrow === false 
      ?<img src={arrUp} /> 
      : <img src={arrDown}/> }
    </div>
    <div >
      {arrow === true
      ? <div style={{height:"0", display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"10px" }}>
      <div className={s.lenguageEvery} onClick={() => setLeng("English")}><img src={en} /> <p>English</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("Français")}><img src={fr} /> <p>Français</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("Español")}><img src={es} /> <p>Español</p></div>
      <div className={s.lenguageEvery} onClick={() => setLeng("日本語")}><img src={yap} /> <p>日本語</p></div>
      </div>
      : null 
    }
   </div>
    </div>
    <div className={s.unionA}>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Blog</a>
      <a href="#">Planters</a>
      <a href="#">Contact</a>
      <button>Call Us</button>
    </div>
  </div>
</nav>

<div className={s.bases}>
  <h1>Nature's Beauty Delivered to You</h1>
  <h3>
  Nature's beauty is just a click away with our online flower and plant shop. We offer 
  <br /> 
  a wide variety of flowers that will bring a touch of nature to your home!
  </h3>
  <div className={s.twoBtn}>
    <button className={s.bookNow}>Book Now</button>
    <button className={s.watchVideo}>
      <img style={{paddingRight: "5px"}} src={videoIMg} alt="imgVideo" />
      Watch Video</button>
  </div>
</div> 
</div>
    </div>
  )
}

export default Header
