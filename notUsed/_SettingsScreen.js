import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
      <View style={styles.flex}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.date}>Date</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#173245',
    border: '5px solid #5f9ea0',
    borderRadius: '5px',
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  title: {
    fontSize: 30,
  },
  date: {
    fontSize: 16,
  },
});
