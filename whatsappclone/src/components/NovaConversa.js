import React from 'react'
import './NovaConversa.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


export default function NovaConversa( ) {

      return (
          <div className="novaconversa">
              <div className="novaconversa--cabecalho">
                  <div className="novaconversa--botaovoltar">
                       <ArrowBackIcon style={{color: '#FFFFFF'}} />
                  </div>
                  <div className="novaconversa--titulocabecalho">Nova Conversa</div>
              </div>
              <div className="novaconversa--lista"></div>
          </div>
      )
}


