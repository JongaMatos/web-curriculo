import React from 'react'
import './CSS/HeaderResume.css'
import Btn from './Btn.jsx'

function HeaderResume(props) {
    return (

        <div className='header'>
            <Btn title={props.title1}></Btn>
            <Btn title={props.title2}></Btn>
            <Btn title={props.title3}></Btn>
            <Btn title={props.title4}></Btn>

        </div>

    )
}

export default HeaderResume
