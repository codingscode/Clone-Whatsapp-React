import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseConfig from './firebaseConfig'


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default {
    fbPopup: async () => {
        const fornecedor = new firebase.auth.FacebookAuthProvider()
        let resultado = await firebaseApp.auth().signInWithPopup(fornecedor)
        return resultado
    },
    adicionarUsuario: async (u) => {
        await db.collection('usuarios').doc(u.id).set({
            nome: u.nome, avatar: u.avatar
        }, {merge: true})
    },
    acessarListaContatos: async (usuarioId) => {
        let lista = []
    
        let resultados = await db.collection('usuarios').get()
        resultados.forEach(cada => {
           let dados = cada.data()
    
           if (cada.id !== usuarioId) {
              lista.push({ id: cada.id, nome: dados.nome, avatar: dados.avatar })
           }
        })
    
        return lista
    },
    adicionarNovaConversa: async (usuario, usuario2) => {
        let novaConversa = await db.collection('conversas').add({
            mensagens: [], usuarios: [usuario.id, usuario2.id]
        })
    
        db.collection('usuarios').doc(usuario.id).update({
            conversas: firebase.firestore.FieldValue.arrayUnion({
                chatId: novaConversa.id, titulo: usuario2.nome, imagem: usuario2.avatar, com: usuario2.id
            })
        })

        db.collection('usuarios').doc(usuario2.id).update({
            conversas: firebase.firestore.FieldValue.arrayUnion({
                chatId: novaConversa.id, titulo: usuario.nome, imagem: usuario.avatar, com: usuario.id
            })
       })
    },
    naListaConversas: (usuarioId, setListaConversa) => {
        return db.collection('usuarios').doc(usuarioId).onSnapshot((doc) => {
           if (doc.exists) {
               let dados = doc.data()
               if (dados.conversas) {
                  setListaConversa(dados.conversas)
               }
           }
        })
    },
    noConteudoConversa: (chatId, setLista) => {
        return db.collection('conversas').doc(chatId).onSnapshot((doc) => {
            if (doc.exists) {
               let dados = doc.data()
               setLista(dados.mensagens)
            }
        })
    },
    enviarMensagem: (dadosConversa, idUsuario, tipo, corpo) => {
        let agora = new Date()
    
        db.collection('conversas').doc(dadosConversa.chatId).update({
           mensagens: firebase.firestore.FieldValue.arrayUnion({
               tipo: tipo, autor: idUsuario, corpo: corpo, data: agora
           })
        })
    }
}
