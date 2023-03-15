import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;
const inputHeight = height * 0.05;
const AccountCreationScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    // Code to handle login verification
  };

  const handleAccountCreation = () => {
    // Code to handle login verification
  };

  return (
    <View style={styles.container}>
        {/*Logo*/}
        <Image
            source={require('../assets/logo.png')}
            style={styles.image}
        />
        {/*Username*/}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
        {/*Password*/}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
        {/*Login button*/}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

        {/*Create Account Button*/}
      <TouchableOpacity style={styles.button} onPress={handleAccountCreation}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    width: '80%',
    height: inputHeight,
    borderWidth: height * 0.003,
    borderRadius: height * 0.01,
    marginVertical: height * 0.01,
    width: width * 0.5,
    paddingHorizontal: width * 0.05,
  },
  button: {
    backgroundColor: '#007AFF',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: width * 0.5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },

});

export default AccountCreationScreen;