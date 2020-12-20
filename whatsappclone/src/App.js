import React, { useState, useEffect } from 'react'
import './App.css'
import avatar1 from './imagens/avatar-1.png'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import ItemListaConversa from './components/itemListaConversa'
import IntroConversa from './components/IntroConversa.js'


export default function App() {

      const [listaconversas, setListaconversas] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

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
                          <ItemListaConversa key={chave} />
                      ))}
                  </div>
              </div>
              <div className="areaconteudo">
                  <IntroConversa />
              </div>
          </div>
      )
}


