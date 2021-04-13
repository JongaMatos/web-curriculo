import React from 'react'
import './HeaderStart.css'
const HeaderStart = (props) => {
    return (
        <header className='HeaderStart'>
            <h1>{props.nome}</h1>
        </header>
    )
}

export default HeaderStart
