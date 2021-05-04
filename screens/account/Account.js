import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase/app'

import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default function Account() {
//estado Login y setLogin
  const [login, setLogin] = useState(null)
  //preguntamos a firebase si estamos logeado
 firebase.auth().onAuthStateChanged((user) => {
  user !==null ? (setLogin(false)) : setLogin(true)
  })

  //y aqui consultamos si no estamos logedo
  //para asi colocar Cargando por que se puede 
  //demorar la cosulta a la base de datos
  if (login == null) {
    return <Text>Cargando...</Text>
  }

  // llego hasta aqui ustilizamos si es verdadero
  //<UserLogged/> y si es falso :
  //<UserGuest/>
  return login ? <UserLogged/>:<UserGuest/>
  
}

const styles = StyleSheet.create({})
