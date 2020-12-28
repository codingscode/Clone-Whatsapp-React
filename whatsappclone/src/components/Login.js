import React from 'react'
import './Login.css'
import Api from '../Api'


export default function Login({ emReceber }) {

     const gerenFacebookLogin = async () => {
          let resultado = await Api.fbPopup()
          if (resultado) {
             emReceber(resultado.user)
          }
          else {
             alert('Erro!')
          }
     }

     return (
         <div className="login">
              <button onClick={gerenFacebookLogin}>Logar com Facebook</button>
         </div>
     )
}

