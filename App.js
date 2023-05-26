import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

const getPopularMovies = async () =>
{
  const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=ec5ec44bf5de4897b94300d5e5ca2abb")
  console.log(JSON.stringify(response, null, 2));
}


export default function App()
{
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button onPress={getPopularMovies} title='Check DB' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    // color: "red",
    fontSize: 20,
    fontStyle: 'italic',
  }
});
