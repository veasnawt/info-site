import React from 'react'
import myImage from '../images/veasnawt.jpg'
import Info from './Info'
import Contact from './Contact'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function Main() {

    //My Info
    const name = "Veasna WT"
    const position = "Mobile Developer"
    const website = 'veasnawt.com'

    //My Contact
    const email = 'veasnawt@gmail.com'
    const linkedin = 'veasnawt'

    //About Me
    const aboutMe = "My name is Veasna. I am a Mobile Developer. I was born in 1999. I code in dart and JavaScript. I love to think outside the box, I love coding and I want to become a Full Stack Developer."
    const interests = "Coding is my favorite. And then comes singing, listening to the music, playing video games, watching movies, reading tech/science news, social media and meeting friends having fun."

    return (
        <div className="main">
            <img className="my-image" src={myImage} alt="veasnawt"/>
            <Info name={name} position={position} website={website}/>
            <div className="about">
                <Contact email={email} linkedin={linkedin}/>
                <About aboutMe={aboutMe}/>
                <Interests interests={interests}/>
            </div>
            <Footer/>
        </div>
    )
}