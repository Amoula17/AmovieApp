import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleForgotPassword = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    try {
      // Simulate API call for password reset
      const response = await fetch('https://your-api.com/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Password reset link sent to your email.');
        router.push('/login'); // Navigate to login screen
      } else {
        Alert.alert('Error', data.message || 'Something went wrong.');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to send password reset email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>Enter your email and we will send you a reset link.</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.navText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#53B4C8',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#53B4C8',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navText: {
    marginTop: 15,
    color: '#53B4C8',
    fontSize: 16,
  },
});
