import React from 'react'
import './CSS/ResumeBody.css'
import FooterResume from './FooterResume'
import Profile from './Profile'
import Trecho from './Trecho'

import ProfileData from '../Data/ProfileData'
import EscolaridadeData from '../Data/EscolaridadeData'
import CursosData from '../Data/CursosData'
import ExperienciaData from '../Data/ExperienciaData'
import ConhecimentosData from '../Data/ConhecimentosData'



function ResumeBody() {
    return (
        <div className='curriculo'>

            <Profile ProfileObject={ProfileData} />


            <Trecho objeto={EscolaridadeData} />
            <Trecho objeto={ExperienciaData} />
            <Trecho objeto={CursosData} />
            <Trecho objeto={ConhecimentosData} />
            <FooterResume />
        </div>
    )
}

export default ResumeBody
