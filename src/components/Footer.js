import React from 'react'
import twitterIcon from '../images/twitter-icon.png'
import facebookIcon from '../images/facebook-icon.png'
import instagramIcon from '../images/instagram-icon.png'
import githubIcon from '../images/github-icon.png'

export default function Footer(props) {
    return (
        <div className="footer">
            <a href='https://twitter.com/veasnawt'>
                <div className="twitter">
                    <img className="twitter-icon" src={twitterIcon} alt="Twitter"/>
                </div>
            </a>
            <a href="https://facebook.com/natavews">
                <div className="facebook">
                    <img className="facebook-icon" src={facebookIcon} alt="Facebook"/>
                </div>
            </a>
            <a href="https://instagram.com/veasnawt">
                <div className="Instagram">
                    <img className="instagram-icon" src={instagramIcon} alt="Instagram"/>
                </div>
            </a>
            <a href="https://github.com/veasnawt">
                <div className="github">
                    <img className="github-icon" src={githubIcon} alt="GitHub"/>
                </div>
            </a>
        </div>
    )
}