// NaBar.jsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default function NavBar() {
  const router = useRouter(); // Navigation

  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/home')}>
        <FontAwesome5 name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/TopologyCheck')}>
        <FontAwesome5 name="network-wired" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/ObjectInfoScreen')}>
        <FontAwesome5 name="info-circle" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navButton} onPress={() => router.push('/ProfileScreen')}>
        <FontAwesome5 name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3A9AB1', // Darker blue for nav bar
    width: '98%',
    height: 60,
    position: 'absolute', // Fix at bottom
    bottom: 0,
    borderRadius: 30,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  navButton: {
    padding: 10,
  },
});
