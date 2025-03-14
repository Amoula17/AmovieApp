import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import * as ImagePicker from 'expo-image-picker'; // To pick images
import NavBar from './NavBar'; // Importing the NavBar component

export default function ProfileScreen() {
  const [profileImage, setProfileImage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to pick an image from the gallery or camera
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  // Function to validate form inputs
  const validateInputs = () => {
    if (!firstName || !lastName) {
      Alert.alert('Error', 'Please enter your first and last name.');
      return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Please enter a valid email.');
      return false;
    }
    if (!password) {
      Alert.alert('Error', 'Please enter a password.');
      return false;
    }
    return true;
  };

  // Function to save changes
  const saveChanges = () => {
    if (validateInputs()) {
      // Add your save logic here (e.g., save to database, API, etc.)
      Alert.alert('Profile updated successfully!');
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Wave */}
      <View style={styles.waveContainer}>
        <Svg height="450" width="100%" viewBox="0 50 1490 350">
          <Path
            fill="#53B4C8"
            d="M0,96L48,112C96,128,192,160,288,144C384,128,480,64,576,64C672,64,768,128,864,144C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>

      {/* Page Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>

        

        {/* First Name Label and Input */}
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        {/* Last Name Label and Input */}
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        {/* Email Label and Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Label and Input */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Save Changes Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation */}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  waveContainer: {
    position: 'absolute',
    top: 0, // Adjusted top for the wave
    width: '490%',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    marginTop: 10, // Adding some space from the wave
    width: '90%', 
    marginLeft:25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profilePicContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#53B4C8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profilePicText: {
    fontSize: 16,
    color: '#53B4C8',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  saveButton: {
    backgroundColor: '#53B4C8',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
