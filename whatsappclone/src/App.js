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


export default function App() {

      const [listaconversas, setListaconversas] = useState([
          {chatId: 1, titulo: 'Fulanis', imagem: avatar3},
          {chatId: 2, titulo: 'Ciclanis', imagem: avatar3},
          {chatId: 3, titulo: 'Beltranis', imagem: avatar3},
          {chatId: 4, titulo: 'Carinha', imagem: avatar3}
      ])
      const [conversaAtiva, setConversaAtiva] = useState({})
      const [usuario, setUsuario] = useState({ id: 1234, avatar: avatar4, nome: 'Heronnes Pereira' })
      const [mostrarNovaConversa, setMostrarNovaConversa] = useState(false)  // experimentrar trocar por true


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


