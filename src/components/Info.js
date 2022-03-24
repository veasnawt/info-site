import React from 'react'

export default function Info(props) {
    return (
        <div>
            <h2 className="name">{props.name}</h2>
            <h5 className="position">{props.position}</h5>
            <h5 className="website">{props.website}</h5>
        </div>
    )
}