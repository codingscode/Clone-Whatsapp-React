import React from 'react'
import './IntroConversa.css'
import imagem from '../imagens/zap.jpg'


export default function IntroConversa() {

     return (
         <div className="introconversa">
             <img src={imagem} alt="imagem" />
             <h1>Mantenha seu celular conectado</h1>
             <h2>O Whatsapp conecta ao seu telefone para sincronizar suas mensagens. Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
         </div>
     )
}

