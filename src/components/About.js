import React from 'react'

export default function About(props) {
    return (
        <div className="about-me">
            <h4 className='about-title'>
                About
            </h4>
            <p className='about-me-paragraph'>
                {props.aboutMe}
            </p>
        </div>
    )
}