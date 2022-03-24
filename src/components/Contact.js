import React from 'react'
import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

export default function Contact(props) {
    return (
        <div className="contact">
            <a href="mailto:veasnawt@gmail.com">
                <div className="email">
                    <img className="email-icon" src={emailIcon} alt="email"/>
                    Email
                </div>
            </a>
            <a href="https://linkedin.com/in/veasna-wt-4683831a4">
                <div className="linkedin">
                    <img className="linkedin-icon" src={linkedinIcon} alt="linkedin"/>
                    LinkedIn
                </div>
            </a>
        </div>
    )
}
