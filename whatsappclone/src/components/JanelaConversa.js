import React from 'react'
import './JanelaConversa.css'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import imagem from '../imagens/avatar-1.png'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'



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
                    <div className="janelaconversa--pre">
                        <div className="janelaconversa--botao">
                            <CloseIcon style={{color: '#919191'}} />
                        </div>
                        <div className="janelaconversa--botao">
                            <InsertEmoticonIcon style={{color: '#919191'}} />
                        </div>
                    </div>
                    <div className="janelaconversa--areaentrada">
                        <input className="janelaconversa--entrada" type="text" placeholder="Digite uma mensagem" />
                    </div>
                    <div className="janelaconversa--pos">
                        <div className="janelaconversa--botao">
                            <SendIcon style={{color: '#919191'}} />
                        </div>
                    </div>
               </div>
          </div>
      )
}

