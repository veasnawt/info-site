import React from 'react'

export default function Interests(props) {
    return (
        <div className="interests">
            <h4 className='interests-title'>
                Interests
            </h4>
            <p className='interests-paragraph'>
                {props.interests}
            </p>
        </div>
    )
}