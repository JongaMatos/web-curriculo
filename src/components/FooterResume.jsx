import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/FooterResume.css'
import Btn from './Btn'

function Footer() {
    return (
        <div className='ft'>

            <Link className='Retorno' to={'/'}>Voltar</Link>

            <Btn title='Início' />
        </div>
    )
}

export default Footer
