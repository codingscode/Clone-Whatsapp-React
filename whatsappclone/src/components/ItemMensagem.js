import React from 'react'
import './ItemMensagem.css'

export default function ItemMensagem ({ dados, usuario }) {

     return (
         <div className="linhamensagem" style={{justifyContent: usuario.id === dados.autor ? 'flex-end' : 'flex-start'}} >
              <div className="itemMensagem">
                  <div className="textomensagem">{dados.corpo}</div>
                  <div className="datamensagem">19:00</div>
              </div>
         </div>
     )
}


