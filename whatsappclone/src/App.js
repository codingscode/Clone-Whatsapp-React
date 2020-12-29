import React, { useState, useEffect } from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import ItemListaConversa from './components/itemListaConversa'
import IntroConversa from './components/IntroConversa.js'
import JanelaConversa from './components/JanelaConversa'
import avatar1 from './imagens/avatar-1.png'
import avatar2 from './imagens/avatar-2.png'
import avatar3 from './imagens/avatar-3.png'
import avatar4 from './imagens/avatar-4.png'
import NovaConversa from './components/NovaConversa'
import Login from './components/Login'
import Api from './Api'


export default function App() {

      const [listaconversas, setListaconversas] = useState([
          
      ])
      const [conversaAtiva, setConversaAtiva] = useState({})
      const [usuario, setUsuario] = useState(null)
      const [mostrarNovaConversa, setMostrarNovaConversa] = useState(false)  

      const gerenNovaConversa = () => {
          setMostrarNovaConversa(true)
      }

      useEffect(() => {
          if (usuario !== null) {
              let unsub = Api.naListaConversas(usuario.id, setListaconversas)
              return unsub
          }
      }, [usuario])

      const gerenDadosLogin = async (u) => {
          let novoUsuario = { id: u.uid, nome: u.displayName, avatar: u.photoURL }
          await Api.adicionarUsuario(novoUsuario)
          setUsuario(novoUsuario)
      }

      if (usuario === null) {
         return (
            <Login emReceber={gerenDadosLogin} />
         )
      }

      return (
          <div className="app-janela">
              <div className="barralateral">
                  <NovaConversa avatares={[avatar1, avatar2, avatar3, avatar4]}
                                usuario={usuario}
                                listaconversas={listaconversas}
                                mostrar={mostrarNovaConversa}
                                setMostrar={setMostrarNovaConversa} />
                  <header>
                      <img className="cabecalho--avatar" src={usuario.avatar} alt="avatar" />
                      <div className="cabecalho--botoes">
                          <div className="cabecalho--botao">
                              <DonutLargeIcon style={{color: '#919191'}} />
                          </div>
                          <div className="cabecalho--botao">
                              <ChatIcon onClick={gerenNovaConversa} style={{color: '#919191'}} />
                          </div>
                          <div className="cabecalho--botao">
                              <MoreVertIcon style={{color: '#919191'}} />
                          </div>
                      </div>
                  </header>
                  <div className="pesquisa">
                      <div className="pesquisa--entrada">
                          <SearchIcon fontSize="small" style={{color: '#919191'}} />
                          <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                      </div>
                  </div>
                  <div className="listaconversas">
                      {listaconversas.map((cada, chave) => (
                          <ItemListaConversa key={chave}
                                             dados={cada}
                                             ativo={conversaAtiva.chatId === listaconversas[chave].chatId}
                                             clicar={() => setConversaAtiva(listaconversas[chave])}/>
                      ))}
                  </div>
              </div>
              <div className="areaconteudo">
                  {conversaAtiva.chatId !== undefined &&
                      <JanelaConversa usuario={usuario} dados={conversaAtiva} />
                  }
                  {conversaAtiva.chatId === undefined &&
                      <IntroConversa />
                  }
              </div>
          </div>
      )
}


