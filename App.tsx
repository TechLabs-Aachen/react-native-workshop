import { StyleSheet, Text, TextInput, View } from 'react-native';
import Counter from './components/Counter';
import { useState } from 'react';

export default function App() {
  const [texty, setTexty] = useState("-")

  return (
    <View style={styles.container}>
      <TextInput 
        value={texty}
        onChangeText={setTexty}
        style={styles.textInput} />
      <Text>Input: {texty} </Text>
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize:40,
    textAlign: "center",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
