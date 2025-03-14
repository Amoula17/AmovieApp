import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import NavBar from './NavBar'; // Importing the NavBar component

export default function ObjectInfoScreen() {
  return (
    <View style={styles.container}>
         
    
          {/* Page Content */}
          <View style={styles.content}>
            <Text style={styles.title}>🌐 Object Info</Text>
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
    top: 0,
    width: '100%',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
