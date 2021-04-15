import React from 'react'
import LineTitle from './LineTitle'

function Trecho(props) {

    let objeto = props.objeto
    let sub = objeto.sub
    let percorrer = sub.map((parte) => {

        let item = parte.item.map((item) => { return <li className='Item'>{item}</li> })

        return <div className='Conteudo'>
            <ul>
                <li className='Subtitulo'>{parte.subtitulo}</li>
                <ul>{item}</ul>
            </ul>
        </div>
    })

    return (
        <div>
            <LineTitle title={objeto.Titulo} />
            {percorrer}
        </div>
    )
}

export default Trecho
