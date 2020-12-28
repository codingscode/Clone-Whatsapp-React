import React, { useState, useEffect } from 'react'
import './NovaConversa.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Api from '../Api'


export default function NovaConversa({ avatares, mostrar, setMostrar, usuario, listaconversas }) {

      const [lista, setLista] = useState([])

      useEffect(() => {
        const acessarLista = async () => {
            if (usuario !== null) {
               let resultados = await Api.acessarListaContatos(usuario.id)
               setLista(resultados)
            }
        }
        acessarLista()
    
      }, [usuario])

      const gerenFechar = () => {
         setMostrar(false)
      }

      return (
          <div className="novaconversa" style={{left: mostrar ? '0' : '-415px'}} >
              <div className="novaconversa--cabecalho">
                  <div onClick={gerenFechar}  className="novaconversa--botaovoltar">
                       <ArrowBackIcon style={{color: '#FFFFFF'}} />
                  </div>
                  <div className="novaconversa--titulocabecalho">Nova Conversa</div>
              </div>
              <div className="novaconversa--lista">
              {lista.map((cada, chave) => (
                    <div className="novaconversa--item" key={chave}>
                         <img className="novaconversa--itemavatar" src={cada.avatar} alt="avatar" />
                         <div className="novaconversa--itemnome">{cada.nome}</div>
                    </div>
               ))}
              </div>
          </div>
      )
}


