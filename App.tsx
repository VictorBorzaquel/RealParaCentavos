import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import centavo5 from './src/assets/centavo5.png';
import centavo10 from './src/assets/centavo10.png';
import centavo25 from './src/assets/centavo25.jpg';
import { Centavo } from './src/components/Centavo';

interface IOutput {
  [key: string]: number;
}

export default function App() {
  const [input, setInput] = useState('')
  const [outputs, setOutputs] = useState({} as IOutput)

  function handleConvertMoney() {
    if (!Number(input)) return Alert.alert('Digite um valor válido!')

    const centavos = [25, 10, 5]

    const convert = centavos.reduce((acc, centavo) => {
      let { rest } = acc
      const result = Math.floor(rest / centavo)

      if (result > 0) rest %= centavo

      return {
        ...acc,
        [String(centavo)]: result,
        rest: Math.floor(rest)
      }
    }, { rest: Number(input) * 100 })

    setOutputs(convert)
  }

  const isRender = (centavo: string) => Object.keys(outputs).includes(centavo) && outputs[centavo] !== 0

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent={false} />

      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>

        <View style={styles.centavos}>
          {isRender('25') && <Centavo value={outputs['25']} renderItem={centavo25} />}
          {isRender('10') && <Centavo value={outputs['10']} renderItem={centavo10} />}
          {isRender('5') && <Centavo value={outputs['5']} renderItem={centavo5} />}
        </View>

        <View style={styles.footer}>
          <View style={styles.inputContent}>
            <Text style={styles.description}>Dinheiro</Text>

            <TextInput
              keyboardType='numeric'
              placeholder='Ex: 2.75'
              value={input}
              onChangeText={setInput}
              style={styles.textInput}
            />

            <TouchableOpacity onPress={handleConvertMoney} style={styles.button}>
              <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e4e4e4'
  },
  centavos: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    borderTopWidth: 3,
    borderColor: '#969696'
  },
  content: {},
  footer: {
    width: '100%',
    padding: 10
  },
  inputContent: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center'
  },
  description: {
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 'bold',
    height: '100%',
    textAlignVertical: 'center',
    backgroundColor: '#caffc3',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#229413',
  },
  textInput: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#229413',
    height: '100%',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#229413',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
  }
});
