import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const imageWidth = width * 0.8;
const imageHeight = height * 0.3;
const inputHeight = height * 0.05;
const AccountCreationScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');

  const [showEmailError, setShowEmailError] = useState(false);
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordCheckError, setShowPasswordCheckError] = useState(false);

  const [emailErrorString, setEmailErrorString] = useState('Email not valid');
  const [usernameErrorString, setUsernameErrorString] = useState('Username not valid')
  


  const handleEmailChange = (val) => {
    setEmail(val)
    setShowEmailError(false)
  }

  const handleUsernameChange = (val) => {
    setUsername(val)
    setShowUsernameError(false)
  }

  const handlePasswordChange = (val) => {
    setPassword(val)
    setShowPasswordError(false)
  }

  const handlePasswordCheckChange = (val) => {
    setPasswordCheck(val)
    setShowPasswordCheckError(false)
  }




  const handleLogin = () => {
    // Code to handle login verification
  };

  const handleEmailVerification = () => {
    // Code to handle login verification
    var allClear = true
    if (password != passwordCheck) {
      allClear = false
      setShowPasswordCheckError(true)
    }
    if (!checkUsernameSpecifications(username)) {
      allClear = false
      setShowUsernameError(true)
    }
    if (!checkPasswordSpecifications(password)) {
      allClear = false
      setShowPasswordError(true)
    }
    if (!checkEmailSpecifications(email)) {
      allClear = false
      setShowEmailError(true)
    }

    if (allClear) {

    }

    //TODO: send username, password, email info to backend, send code via email
  };

  function checkEmailSpecifications(email) {
    /*  
    at_index = email.indexOf('@')
      dot_index = email.indexOf('.')
      if (at_index == -1 || dot_index == -1 || at_index > dot_index) {
        return false
      }
      return true
      */
    pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function checkUsernameSpecifications(username) {
    const regex = /^[^\s\\]{8,15}$/;
    return regex.test(username);
  }

  function checkPasswordSpecifications(password) {
    const regex = /^[^\s\\]{8,15}$/;
    return regex.test(password);
  }
  
  return (
    <View style={styles.container}>
        {/*Title*/}
        <Text 
          style={styles.title}>
          Account Creation
        </Text>
        {/*Logo*/}
        <Image
            source={require('../assets/logo.png')}
            style={styles.image}
        />

        {/*Email Error message*/}
        {showEmailError ?
          <Text
            style = {styles.specificationError}>
            Email not valid
          </Text> 
          : null
        }


        {/*Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />

        {/*Email Guideline*/} 
      <Text 
        style={styles.specifications}>
        Please enter your email.
      </Text>

      {/*Username Error message*/}
      {showUsernameError ?
        <Text
          style = {styles.specificationError}>
          Username not valid
        </Text> 
        : null
      }

        {/*Username*/}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={handleUsernameChange}
        value={username}
      />

      {/*Username guideline*/} 
      <Text 
      style={styles.specifications}>
        Please enter 8-15 characters with no spaces or backslashes.
      </Text>

      {/*Password Error message*/}
      {showPasswordError ?
        <Text
          style = {styles.specificationError}>
          Password not valid
        </Text> 
        : null
      }

        {/*Password*/}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={handlePasswordChange}
        value={password}
      />

      {/*Password guideline*/} 
      <Text 
      style={styles.specifications}>
        Please enter 8-15 characters with no spaces or backslashes.
      </Text>


      {/*Password Check Error message*/}
      {showPasswordCheckError ?
        <Text
          style = {styles.specificationError}>
          Passwords do not match each other
        </Text> 
        : null
      }

      {/*Password double check*/}
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password "
        secureTextEntry
        onChangeText={handlePasswordCheckChange}
        value={passwordCheck}
        />

      {/*Password guideline*/} 
      <Text 
      style={styles.specifications}>
        Please enter your password again.
      </Text>


        {/*Create Account Button*/}
      <TouchableOpacity style={styles.button} onPress={handleEmailVerification}>
        <Text style={styles.buttonText}>Send email verification</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: height * 0.05
  },

  specifications: {
    fontSize: height * 0.01
  },

  specificationError: {
    fontSize: height * 0.01,
    color: 'red'
  },

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
    justifyContent: 'center'
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },

});

export default AccountCreationScreen;