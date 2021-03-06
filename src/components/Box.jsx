import React from 'react'
import { Link } from 'react-router-dom'
import HeaderStart from './HeaderStart'
import './CSS/Box.css'

function Boxes() {
    return (<>
        <div className='Bigbox'>
            <HeaderStart nome='João Gabriel de Campos de Matos' />

            <div className='Box'>
                <p className='p1'>Este é meu currículo.</p>
                <p className='p2'>Clique em "visualizar" para me conhecer um pouco melhor.</p>
                
            </div>
            <Link to={'/Curriculo'} className='Botão'>Visualizar</Link>

        </div>
    </>
    )
}

export default Boxes
