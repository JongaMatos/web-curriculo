import React from 'react'
import './CSS/LineTitle.css'

function LineTitle(props) {
    return (
        <div className='lineTitle'> 
            <span className='Line' />
            <h2 className='TituloSeção' id={props.title}>{props.title}</h2>
        </div>
    )
}

export default LineTitle
