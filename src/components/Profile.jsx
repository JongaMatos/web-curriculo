import React from 'react'

import './CSS/Profile.css'

function Profile(props) {
    return (
        <div className='ProfileBox'>
            <div className='Profile'>
                <img className="ProfilePic" src={props.ProfileObject.ProfilePic.src} alt={props.ProfileObject.ProfilePic.alt} />

                <p className='ProfileNome'>{props.ProfileObject.Nome}</p>
                <p className='ProfileContato'>Email: {props.ProfileObject.Email}</p>
                <p className='ProfileContato'>Telefone: {props.ProfileObject.Telefone}</p>
            </div>
            <div className='Aboutme'>
                <h3>Sobre mim:</h3>
                <p>{props.ProfileObject.SobreMim}</p>
            </div>

        </div>

    )
}
export default Profile
