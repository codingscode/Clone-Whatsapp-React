import React from 'react'
import './itemListaConversa.css'
import avatar from '../imagens/avatar-1.png'


export default function ItemListaConversa () {

      return (
          <div className="itemListaConversa">
               <img className="itemListaConversa--avatar" src={avatar} alt="avatar" />
               <div className="itemListaConversa--linhas">
                    <div className="itemListaConversa--linha" >
                          <div className="itemListaConversa--nome">Heronnes Pereira</div>
                          <div className="itemListaConversa--data">19:00</div>
                    </div>
                    <div className="itemListaConversa--linha" >
                        <div className="itemListaConversa--ultimaMsg">
                            <p>Quanto tempo demora para aprender programar ? Quanto tempo demora para aprender programar ? Quanto tempo demora para aprender programar ?</p>
                        </div>
                    </div>
               </div>
          </div>
      )
}

