import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import './JanelaConversa.css'
import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import imagem from '../imagens/avatar-1.png'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'
import ItemMensagem from './ItemMensagem.js'


export default function JanelaConversa() {

      const [emojiAberto, setEmojiAberto] = useState(false)
      const [texto, setTexto] = useState('')
      const [ouvindo, setOuvindo] = useState(false)
      const [lista, setLista] = useState([
           {corpo: 'bla bla bla'}, {corpo: 'bla bla'}, {corpo: 'bla bla bla bla'}
      ])


      let reconhecimento = null
      let reconhecerFala = window.SpeechRecognition || window.webkitSpeechRecognition

      if (reconhecerFala !== undefined) {
         reconhecimento = new reconhecerFala()
      }
      
      const gerenEmojiClique = (evento, emojiObject) => {
          console.log(emojiObject)
          setTexto(texto + emojiObject.emoji)
      }

      const gerenAbrirEmoji = () => {
         setEmojiAberto(true)
      }
     
      const gerenFecharEmoji = () => {
         setEmojiAberto(false)
      }

      const gerenClicarEnviar = () => {
          
      }

      const gerenClicarMic = () => {
        if (reconhecimento !== null) {
   
            reconhecimento.onstart = () => {
               setOuvindo(true)
            }
            reconhecimento.onend = () => {
               setOuvindo(false)
            }
            reconhecimento.onresult = (evento) => {
               setTexto(evento.results[0][0].transcript)
            }
         
            reconhecimento.start()
        }
      }

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
                    {lista.map((cada, chave) => (
                        <ItemMensagem chave={chave} dados={cada} />
                    ))}
               </div>

               <div className="janelaconversa--areaemoji" style={{height: emojiAberto ? '200px' : '0px' }} >
                    <EmojiPicker disableSearchBar disableSkinTonePicker onEmojiClick={gerenEmojiClique} />
               </div>

               <div className="janelaconversa--rodape">
                    <div className="janelaconversa--pre">
                        <div className="janelaconversa--botao" onClick={gerenFecharEmoji} style={{width: emojiAberto ? 40 : 0}} >
                            <CloseIcon style={{color: '#919191'}} />
                        </div>
                        <div className="janelaconversa--botao" onClick={gerenAbrirEmoji} >
                            <InsertEmoticonIcon style={{color: emojiAberto ? '#009688' : '#919191'}} />
                        </div>
                    </div>
                    <div className="janelaconversa--areaentrada">
                        <input className="janelaconversa--entrada" 
                               type="text" 
                               placeholder="Digite uma mensagem" 
                               value={texto} 
                               onChange={evento => setTexto(evento.target.value)} />
                    </div>
                    <div className="janelaconversa--pos">
                        {texto == '' &&
                            <div className="janelaconversa--botao" onClick={gerenClicarMic}>
                                <MicIcon style={{color: ouvindo ? '#126ECE' : '#919191'}} />
                            </div>
                        }
                        {texto !== '' &&
                            <div className="janelaconversa--botao" onClick={gerenClicarEnviar}>
                                <SendIcon style={{color: '#919191'}} />
                            </div>
                        }
                    </div>
               </div>
          </div>
      )
}

