import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Box, FlatList, NativeBaseProvider } from 'native-base';
import axios from 'axios';

export default Floofs = () => {
  const [dogData, setDogData] = useState([]);

  const getFloofers = async () => {
    try {
      let result = await fetch('https://dog.ceo/api/breeds/image/random');
      // let result = await axios('https://dog.ceo/api/breeds/image/random');
      let json = await result.json();
      // json is message and status
      // how do i get the image?
      // let pic = await result.image();
      console.log('result', result);
      setDogData(json.message);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getFloofers();
  }, [])

  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>Floofs</Text>
        </View>
        <FlatList
          data={dogData}
          keyExtractor={ item => item.id}
          renderItem={({ item }) => (
            <Box px={5} py={2} rounded="md" my={2} bg="#ed9555">
              {item.image}
            </Box>
          )}
        />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#173245',
    border: '6px solid #5f9ea0',
    borderRadius: '5px',
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    // border: '5px solid #5f9ea0',
  },
  title: {
    fontSize: 30,
    color: '#173245',
  },
  date: {
    fontSize: 16,
    color: '#173245',
  },
});
