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
    }
}
