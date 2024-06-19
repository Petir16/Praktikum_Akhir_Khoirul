import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a View Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue', // Menambahkan variasi dengan warna background
  },
  text: {
    fontSize: 18,
    color: 'darkblue', // Menambahkan variasi dengan warna teks
  },
});

export default ViewScreen;
