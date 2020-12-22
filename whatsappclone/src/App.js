import React, { useState, useEffect } from 'react'
import './App.css'
import avatar1 from './imagens/avatar-1.png'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import ItemListaConversa from './components/itemListaConversa'
import IntroConversa from './components/IntroConversa.js'
import JanelaConversa from './components/JanelaConversa'


export default function App() {

      const [listaconversas, setListaconversas] = useState([
          {chatId: 1, titulo: 'Fulanis', imagem: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
          {chatId: 2, titulo: 'Ciclanis', imagem: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
          {chatId: 3, titulo: 'Beltranis', imagem: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'},
          {chatId: 4, titulo: 'Carinha', imagem: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'}
      ])
      const [conversaAtiva, setConversaAtiva] = useState({})

      return (
          <div className="app-janela">
              <div className="barralateral">
                  <header>
                      <img className="cabecalho--avatar" src={avatar1} alt="avatar" />
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
                          <ItemListaConversa key={chave} onClick={() => setConversaAtiva(listaconversas[chave])}/>
                      ))}
                  </div>
              </div>
              <div className="areaconteudo">
                  {conversaAtiva.chatId !== undefined &&
                      <JanelaConversa />
                  }
                  {conversaAtiva.chatId === undefined &&
                      <IntroConversa />
                  }
              </div>
          </div>
      )
}


