import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';
import styles from './style';


export default function App()
{

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>

      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>

      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>
    </View>
  );
}

