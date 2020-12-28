import React, { useState, useEffect} from 'react'
import './itemListaConversa.css'
import avatar from '../imagens/avatar-1.png'


export default function ItemListaConversa ({ clicar, ativo, dados }) {
      const [tempo, setTempo] = useState('')

      useEffect(() => {
            if (dados.dataUltimaMensagem > 0) {
                let d = new Date(dados.dataUltimaMensagem.seconds*1000)
                let horas = d.getHours()
                let minutos = d.getMinutes()
                horas = horas < 10 ? `0${horas}` : horas
                minutos = minutos < 10 ? `0${minutos}` : minutos
                setTempo(`${horas}:${minutos}`)
            }
      }, [dados])

      return (
          <div className={`itemListaConversa ${ativo ? 'ativo' : ''}`} onClick={clicar}>
               <img className="itemListaConversa--avatar" src={dados.imagem} alt="avatar" />
               <div className="itemListaConversa--linhas">
                    <div className="itemListaConversa--linha" >
                          <div className="itemListaConversa--nome">{dados.titulo}</div>
                          <div className="itemListaConversa--data">{tempo}</div>
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

