import React from 'react'
import './JanelaConversa.css'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import imagem from '../imagens/avatar-1.png'


export default function JanelaConversa() {

      return (
          <div className="janelaconversa">
               <div className="janelaconversa--cabecalho">
                    <div className="janelaconversa--cabecalhoinfo">
                         <img className="janelaconversa--avatar" src={imagem} alt="" />
                         <div className="janelaconversa--nome">Heronnes Pereira</div>
                    </div>
                    <div className="janelaconversa--cabecbotoes">
                         <div className="janelaconversa--botao">
                             <SearchIcon style={{color: '#919191'}} />
                         </div>
                         <div className="janelaconversa--botao">
                             <AttachFileIcon style={{color: '#919191'}} />
                         </div>
                         <div className="janelaconversa--botao">
                             <MoreVertIcon style={{color: '#919191'}} />
                         </div>
                    </div>
               </div>
               <div className="janelaconversa--corpo">

               </div>
               <div className="janelaconversa--rodape">

               </div>
          </div>
      )
}

