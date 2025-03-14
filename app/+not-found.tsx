import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function HomeScreen() {
  


 
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>❌ Déconnecté"</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 100 },
});

