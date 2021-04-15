import React from 'react'
import './CSS/Btn.css'

function Btn(props) {
    return (
        <>
            <a className='Btn'href={'#' + props.title} >{props.title}</a>

        </>
    )
}

export default Btn
