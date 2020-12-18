import React from 'react'
import './App.css'
import avatar1 from './imagens/avatar-1.png'

export default function App() {

      return (
          <div className="app-janela">
              <div className="barralateral">
                  <header>
                      <img className="cabecalho--avatar" src={avatar1} alt="avatar" />
                      <div className="cabecalho--botoes">botoes</div>
                  </header>
                  <div className="pesquisa">***</div>
                  <div className="listaconversas">***</div>
              </div>
              <div className="areaconteudo">****</div>
          </div>
      )
}


