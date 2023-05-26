import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';


export default function App()
{
  const [name, setName] = useState("Tenkorang Daniel");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [current, setCurrent] = useState(true);

  const onClickNameChanger = () =>
  {
    setName("Kwame Daniel")
    setSession({ number: 100, title: "Demo sessions" })
    setCurrent(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>This session number is {session.number} and about {session.title} </Text>
      <Text style={styles.text}>{
        current ? "Current sesion" : "Next Session"
      } </Text>
      <Button title='Change Name' onPress={onClickNameChanger} />

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
    color: "red",
    fontSize: 20,
    fontStyle: 'italic',
  }
});
