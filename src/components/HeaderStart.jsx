import React from 'react'
import './CSS/HeaderStart.css'
const HeaderStart = (props) => {
    return (
        <header className ='HeaderStart'>
            <h1 className ='NomeHeader'>{props.nome}</h1>
        </header>
    )
}

export default HeaderStart
