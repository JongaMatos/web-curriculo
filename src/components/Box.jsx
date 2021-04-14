import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStart from './HeaderStart'
import './Box.css'

function Boxes() {
    return (
        <div className='Bigbox'>
            <HeaderStart nome='João Gabriel de Campos de Matos' />

            <div className='Box'>
                <p className='p1'>Este é meu curriculo.</p>
                <p className='p2'>Clique em visualizar para me conhecer um pouco melhor.</p>
                {/* <button className='Botão'>Visualizar</button> */}
                <Link to={'/Curriculo'} className='Botão'>Teste</Link>
            </div>
        </div>
    )
}

export default Boxes
