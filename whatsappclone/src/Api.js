import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

import firebaseconfig from './firebaseConfig'


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default {
    fbPopup: async () => {
        const fornecedor = new firebase.auth.FacebookAuthProvider()
        let resultado = await firebaseApp.auth().signWithPopup(fornecedor)
        return resultado
    }
}
