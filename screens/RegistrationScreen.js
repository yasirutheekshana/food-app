import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from  '../firebase'

const RegistrationScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://food-app-afc1d.firebaseapp.com'
      })
      .then(() => {
        alert('Verification email sent')
      })
      .catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    })
    .catch((error) => {
      alert(error.message)
    })
  }

    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 23}}> Register Here..!! </Text>
        <View>
        <TextInput
                style={styles.textInput}
                placeholder='First Name'
                onChangeText={(firstName) => setFirstName(firstName)}
                autoCorrect={false} 
          />
           <TextInput
                style={styles.textInput}
                placeholder='Last Name'
                onChangeText={(lastName) => setLastName(lastName)}
                autoCorrect={false} 
          />
          <TextInput
                style={styles.textInput}
                placeholder='Email'
                onChangeText={(email) => setEmail(email)}
                autoCapitalize='none'
                autoCorrect={false} 
                keyboardType='email-address'
            />
            <TextInput
                style={styles.textInput}
                placeholder='password'
                onChangeText={(password) => setPassword(password)}
                autoCapitalize='none'
                autoCorrect={false} 
                secureTextEntry={true}
            />
        </View>
        <TouchableOpacity
            onPress={() => registerUser(email, password, firstName, lastName)}
            style = {styles.button}
        >
            <Text style={{fontWeight: 'bold', fontSize:22}}>Register</Text>
        </TouchableOpacity>
      </View>
    )
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 100,
  },
  textInput:{
      paddingTop: 20,
      paddingBottom: 10,
      width:400,
      fontSize: 20,
      borderBottomWidth:1,
      borderBottomColor: '#000',
      marginBottom:10,
      textAlign: 'center'
  },
  button:{
      marginTop: 50,
      height: 70,
      width: 250,
      backgroundColor: '#026efd',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:50,
  }
})