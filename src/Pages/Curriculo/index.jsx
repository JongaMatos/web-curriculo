import React from 'react'
import './index.css'
import HeaderResume from '../../components/HeaderResume.jsx'
import FooterResume from '../../components/FooterResume'
// import LineTitle from '../../components/LineTitle'
// import Profile from '../../components/Profile'
import ResumeBody from '../../components/ResumeBody'
import Trecho from "../../components/Trecho"
import EscolaridadeData from '../../Data/EscolaridadeData'
function Curriculo() {
    return (
        <>
            <span id='Inicio' />
            <HeaderResume title1='Escolaridade' title2="Experiência" title3='Cursos' title4='Conhecimentos' />
            <ResumeBody />
            {/* <FooterResume /> */}


        </>
        // <div className='curriculo'>
        //     <span id='Inicio' />
        //     <HeaderResume title1='Escolaridade' title2="Experiencia" title3='Cursos' title4='Conhecimentos' />

        //     <Profile />

        //     <LineTitle title='Escolaridade' />
        //     <div className='Conteudo'>
        //         <ul>
        //             <li className='Subtitulo'>Ensino médio: 2015-2017</li>
        //             <ul>
        //                 <li className='Item'>Colegio Olimpo de Brasilia.</li>
        //                 <li className='Item'>Colegio Unico Educacional.</li>
        //             </ul>
        //             <li className='Subtitulo'>Bacharel em Engenharia de Software 2018/1-Presente</li>
        //             <ul><li className='Item'>Univeridade de Brasilia, Faculdade do Gama</li></ul>
        //         </ul>
        //     </div>
        //     {/*************************************************************************** */}
        //     <LineTitle title='Experiencia' />
        //     <div className='Conteudo'>
        //         <ul>
        //             <li className='Subtitulo'> Estagio</li>
        //             <ul>
        //                 <li className='Item'>Admnistração Central do INSS, Divisão de Gestão de Pessoas.</li>
        //             </ul>
        //             <li className='Subtitulo'>Empresa Junior</li>
        //             <ul>
        //                 <li className='Subtitulo'>Orc'estra gamificação</li>
        //                 <ul>
        //                     <li className='Item'>Treinee 2021/1-Presente</li>
        //                 </ul>
        //             </ul>
        //         </ul>
        //     </div>

        //     {/*************************************************************************** */}
        //     <LineTitle title='Cursos' />
        //     <div className='Conteudo'>
        //         <ul className='cursos'>
        //             <li className='Subtitulo'>Linguas</li>
        //             <ul>
        //                 <li className='Item'>Ingles Basico, UnB Idiomas.</li>
        //                 <li className='Item'>Ingles Intermediario 1, UnB Idiomas.</li>
        //             </ul>

        //             <li className='Subtitulo'>Introdução a Machine Learning e Deep Learning (IMLDL) com Python e Pytorch, BRASIL+IA</li>
        //         </ul>

        //     </div>

        //     {/*************************************************************************** */}
        //     <LineTitle title='Conhecimentos' />
        //     <div className='conhecimentos'>
        //         <ul className='Conhecimento1' >
        //             <h3 className='Subtitulo' >Programação</h3>
        //             <li className='Item'>C/C++</li>
        //             <li className='Item'>Node</li>
        //             <li className='Item'>Python</li>
        //         </ul>
        //         <span className='Vline' />

        //         <ul className='Conhecimento2' >
        //             <h3 className='Subtitulo'>Outros</h3>
        //             <li className='Item'>Linux Ubuntu</li>
        //             <li className='Item'>Markdown</li>
        //             <li className='Item'>Pacote microsoft office</li>
        //         </ul>
        //     </div>
        //     {/*************************************************************************** */}


        //     <FooterResume />
        // </div>
    )
}

export default Curriculo
