import React, { useState, useEffect } from 'react'
import './App.css'

import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import ItemListaConversa from './components/itemListaConversa'
import IntroConversa from './components/IntroConversa.js'
import JanelaConversa from './components/JanelaConversa'
import avatar from './imagens/avatar-3.png'
import perfil from './imagens/avatar-4.png'
import NovaConversa from './components/NovaConversa'


export default function App() {

      const [listaconversas, setListaconversas] = useState([
          {chatId: 1, titulo: 'Fulanis', imagem: avatar},
          {chatId: 2, titulo: 'Ciclanis', imagem: avatar},
          {chatId: 3, titulo: 'Beltranis', imagem: avatar},
          {chatId: 4, titulo: 'Carinha', imagem: avatar}
      ])
      const [conversaAtiva, setConversaAtiva] = useState({})
      const [usuario, setUsuario] = useState({ id: 1234, avatar: perfil, nome: 'Heronnes Pereira' })

      return (
          <div className="app-janela">
              <div className="barralateral">
                  <NovaConversa />
                  <header>
                      <img className="cabecalho--avatar" src={usuario.avatar} alt="avatar" />
                      <div className="cabecalho--botoes">
                          <div className="cabecalho--botao">
                              <DonutLargeIcon style={{color: '#919191'}} />
                          </div>
                          <div className="cabecalho--botao">
                              <ChatIcon style={{color: '#919191'}} />
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
                      <JanelaConversa usuario={usuario}/>
                  }
                  {conversaAtiva.chatId === undefined &&
                      <IntroConversa />
                  }
              </div>
          </div>
      )
}


