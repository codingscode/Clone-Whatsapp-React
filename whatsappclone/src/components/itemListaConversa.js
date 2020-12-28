import React from 'react'
import './itemListaConversa.css'
import avatar from '../imagens/avatar-1.png'


export default function ItemListaConversa ({ clicar, ativo, dados }) {

      return (
          <div className={`itemListaConversa ${ativo ? 'ativo' : ''}`} onClick={clicar}>
               <img className="itemListaConversa--avatar" src={dados.imagem} alt="avatar" />
               <div className="itemListaConversa--linhas">
                    <div className="itemListaConversa--linha" >
                          <div className="itemListaConversa--nome">{dados.titulo}</div>
                          <div className="itemListaConversa--data">19:00</div>
                    </div>
                    <div className="itemListaConversa--linha" >
                        <div className="itemListaConversa--ultimaMsg">
                            <p>{dados.ultimaMensagem}</p>
                        </div>
                    </div>
               </div>
          </div>
      )
}

