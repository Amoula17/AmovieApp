import { View, Text, TextInput,Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Path } from 'react-native-svg';
import React from 'react';

export default function RegisterScreen() {
  const router = useRouter();

  // State hooks for form fields
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleRegister = () => {
    // Validation for empty fields and password match
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      Alert.alert('First name and last name must contain only letters');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Please enter a valid email');
      return;
    }

    // Navigate to the login page after successful registration
    Alert.alert('Registration successful');
    router.push('/login'); // Ensure '/login' corresponds to your login page route
  };

  return (
    <View style={styles.container}>
      {/* Top Wave */}
      <View style={styles.waveContainer}>
        <Svg height="450" width="100%" viewBox="5 1 1490 350">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
       {/* Bottom Wave */}
       <View style={[styles.waveContainer, { position: 'absolute', bottom: 0, transform: [{ rotate: '180deg' }] }]}>
        <Svg height="200" width="100%" viewBox="9 0 1440 320">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Registration Form */}
      <View style={styles.formContainer}>



        <View style={styles.logoContainer}>
                  {/* Logo */}
                  <Image source={require('../assets/images/logo.png')} style={styles.logo} />
                </View>
          <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.navText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  waveContainer: {
    position: 'absolute',
    top: 10,
    width: '550%',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 1, 
    marginBottom: 1, // Space between logo and form
  },
  logo: {
    width: 160,
    height: 60,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#53B4C8',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  navText: {
    textAlign: 'center',
    color: '#53B4C8',
    fontSize: 16,
    marginBottom: 20,
  },
});

