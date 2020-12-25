import React from 'react'
import './ItemMensagem.css'

export default function ItemMensagem ({ dados }) {

     return (
         <div className="linhamensagem" style={{justifyContent: 'flex-start'}} >
              <div className="itemMensagem">
                  <div className="textomensagem">{dados.corpo}</div>
                  <div className="datamensagem">19:00</div>
              </div>
         </div>
     )
}


