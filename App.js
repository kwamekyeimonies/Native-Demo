import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';


export default function App()
{
  const [currentValue, setCurrentValue] = useState(0);

  const onClickNameChanger = () =>
  {

  }

  const Multiplier = () =>
  {
    setCurrentValue(currentValue + 5)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentValue} </Text>
      <Button title='Add Me' onPress={Multiplier} />

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
