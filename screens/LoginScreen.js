import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from  '../firebase';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (error){
            alert(error.massage)
        }
    }

    return (
      <View style = {styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 26}}> Login </Text>
        <View style={{marginTop: 40}}>
            <TextInput
                style={styles.textInput}
                placeholder='Email'
                onChangeText={(email) => setEmail(email)}
                autoCapitalize='none'
                autoCorrect={false} 
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
            onPress={() => loginUser(email, password)}
            style = {styles.button}
        >
            <Text style={{fontWeight: 'bold', fontSize:22}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('RegistrationScreen')}
            style = {{marginTop:20}}
        >
            <Text style={{fontWeight: 'bold', fontSize:16}}>Don't have an account? Register Now</Text>
        </TouchableOpacity>
      </View>
    )
}

export default LoginScreen;

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