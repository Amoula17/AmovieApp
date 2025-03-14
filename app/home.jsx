import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Switch, Dimensions, ScrollView, Animated, Modal, TextInput, TouchableOpacity } from 'react-native';
import NavBar from './NavBar';
import { FontAwesome } from '@expo/vector-icons'; // For using icons

// Liste des pièces et des nœuds associés
const pieces = [
  { name: 'Piéce 1 ', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5', 'Node 6'], icon: 'couch' },
  { name: 'Piéce 2', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5', 'Node 6'], icon: 'utensils' },
  { name: 'Piéce 3', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5', 'Node 6'], icon: 'bed' },
  { name: 'Piéce 4', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5', 'Node 6'], icon: 'bed' },
  { name: 'Piéce 5', nodes: ['Node 1', 'Node 2', 'Node 3', 'Node 4', 'Node 5', 'Node 6'], icon: 'bath' },
];

export default function HomeScreen() {
  // État pour gérer l'état des interrupteurs
  const [switchStates, setSwitchStates] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // For modal visibility
  const [newPieceName, setNewPieceName] = useState('');
  const [newNodes, setNewNodes] = useState(['']); // For new nodes input

  // Fonction pour changer l'état du switch
  const handleSwitchChange = (nodeName) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [nodeName]: !prevState[nodeName], // Inverse l'état du switch
    }));
  };

  // Fonction pour ajouter une nouvelle pièce
  const handleAddPiece = () => {
    // Validate and add new piece
    if (newPieceName.trim()) {
      pieces.push({ name: newPieceName, nodes: newNodes, icon: 'plus' });
      setNewPieceName('');
      setNewNodes(['']);
      setModalVisible(false); // Close modal
    }
  };

  // Fonction pour ajouter un nouveau champ de nœud
  const handleAddNode = () => {
    setNewNodes((prevNodes) => [...prevNodes, '']);
  };

  // Fonction pour gérer la modification des valeurs des nœuds
  const handleNodeChange = (index, value) => {
    const updatedNodes = [...newNodes];
    updatedNodes[index] = value;
    setNewNodes(updatedNodes);
  };

  // Rendu de chaque élément de la liste (pièce + nœuds avec interrupteurs)
  const renderItem = ({ item }) => {
    if (!item) return null; // Return null if item is undefined
    return (
      <View style={styles.pieceContainer}>
        <FontAwesome name={item.icon} size={50} color="#ff4081" style={styles.icon} />
        <Text style={styles.pieceName}>{item.name}</Text>
        <FlatList
          data={item.nodes || []} // Fallback to an empty array if item.nodes is undefined
          keyExtractor={(node, idx) => `${item.name}-${idx}`}
          renderItem={({ item: node }) => (
            <View style={styles.nodeContainer}>
              <Text style={styles.nodeText}>{node}</Text>
              <Switch
                value={switchStates[node] || false}
                onValueChange={() => handleSwitchChange(node)}
              />
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Button to show modal */}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* ScrollView horizontal pour naviguer entre les pièces */}
      <ScrollView horizontal pagingEnabled style={styles.scrollContainer}>
        {pieces.map((piece, index) => (
          <View key={index} style={styles.pieceItem}>
            {renderItem({ item: piece })}
          </View>
        ))}
      </ScrollView>

      {/* Modal for adding a new piece */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add New Piece</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter piece name"
              value={newPieceName}
              onChangeText={setNewPieceName}
            />
            <Text style={styles.modalSubTitle}>Enter Nodes:</Text>
            {newNodes.map((node, index) => (
              <TextInput
                key={index}
                style={styles.input}
                placeholder={`Node ${index + 1}`}
                value={node}
                onChangeText={(text) => handleNodeChange(index, text)}
              />
            ))}
            <TouchableOpacity style={styles.addNodeButton} onPress={handleAddNode}>
              <Text style={styles.addButtonText2}>Add Node</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addButton2} onPress={handleAddPiece}>
              <Text style={styles.addButtonText2}>Add Piece</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.addButtonText2}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Composant de navigation (NavBar) */}
      <NavBar />
    </View>
  );
}

// Styles de l'interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Couleur de fond claire
  },
  scrollContainer: {
    flex: 2,
    marginTop: 20,
  },
  pieceItem: {
    width: Dimensions.get('window').width, // Largeur de chaque élément égal à la largeur de l'écran
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieceContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10, // Shadow for Android
    width: 320,
    marginTop: 80,
    marginBottom: 180,
    transform: [{ perspective: 1000 }, { rotateY: '5deg' }], // 3D effect
  },
  icon: {
    marginBottom: 15,
    transform: [{ scale: 1.2 }], // Slight scaling for more effect
  },
  pieceName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
    marginTop: 20,
    textAlign: 'center',
  },
  nodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee', // Subtle divider for better structure
    paddingBottom: 10,
  },
  nodeText: {
    fontSize: 20,
    color: '#555',
    marginRight: 20,
  },
  addButton: {
    backgroundColor: 'green', // Green color for the button
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 690, // Position at the top
    right: 170, // Position at the right
    zIndex: 900, // Ensure it stays on top
  },
  addNodeButton: {
    backgroundColor: 'green',
    width: 150,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButton2: {
    backgroundColor: 'green', // Green color for the button
    width: 150,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20, // Slightly reduced from 60 to ensure proper spacing
    left: '33%', // Center it horizontally
    transform: [{ translateX: -75 }], // Adjust for centering the button
    zIndex: 900, // Ensure it stays on top
  },
  
  
  addButtonText2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubTitle: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:140,
    width: 90,
    height: 40,
    borderRadius: 5,
  },
});
