import React, { useState, useEffect } from 'react'
import './ItemMensagem.css'


export default function ItemMensagem ({ dados, usuario }) {
    const [tempo, setTempo] = useState('')

    useEffect(() => {
          if (dados.data > 0) {
              let d = new Date(dados.data.seconds*1000)
              let horas = d.getHours()
              let minutos = d.getMinutes()
              horas = horas < 10 ? `0${horas}` : horas
              minutos = minutos < 10 ? `0${minutos}` : minutos
              setTempo(`${horas}:${minutos}`)
          }
    }, [dados])

     return (
         <div className="linhamensagem" style={{justifyContent: usuario.id === dados.autor ? 'flex-end' : 'flex-start'}} >
              <div className="itemMensagem" style={{backgroundColor: usuario.id === dados.autor ? '#DCF8C6' : 'FFF'}} >
                  <div className="textomensagem">{dados.corpo}</div>
                  <div className="datamensagem">{tempo}</div>
              </div>
         </div>
     )
}


