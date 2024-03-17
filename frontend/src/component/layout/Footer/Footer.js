import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS Mobile Phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore}alt="Appstore" />
        </div>

        <div class="midFooter">
            <h1>MARKET MINGLE.</h1>
            <p>High Quality is our First Priority</p>

            <p>Copyright 2024 &copy; Market Mingle</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://instagram.com">Instagram</a>
            <a href="http://youtube.com">Youtube</a>
            <a href="https://facebook.com">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer