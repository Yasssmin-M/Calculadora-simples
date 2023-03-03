import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function App() {

  const [num1,setnum1] = useState('');
  const [num2, setnum2] = useState('');

  function soma (){
    const resultado = parseFloat(num1) + parseFloat(num2);

    alert('O resultado é igual a ' + resultado);
  }

  function sub (){
    const resultado = parseFloat(num1) - parseFloat(num2);

    alert('O resultado é igual a ' + resultado);
  }

  function mult (){
    const resultado = parseFloat(num1) * parseFloat(num2);

    alert('O resultado é igual a ' + resultado);
  }

  function div (){
    const resultado = parseFloat(num1) / parseFloat(num2);

    alert('O resultado é igual a ' + resultado);
  }

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}> Calculadora </Text>
    <TextInput style={styles.input0} keyboardType= 'numeric' placeholder="Digite um número" onChangeText={(num1)=>setnum1(num1)} /> 
    <TextInput style={styles.input1} keyboardType= 'numeric' placeholder="Digite um número" onChangeText={(num2)=>setnum2(num2)} /> 

    <View style={{flex: 1, flexDirection: 'row'}}>
    <TouchableOpacity style={styles.btn} onPress={soma}>
      <Text style={styles.titulobtn}> +</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={sub}>
      <Text style={styles.titulobtn}>  -</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={mult}>
      <Text style={styles.titulobtn}>  x</Text> 
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={div}>
      <Text style={styles.titulobtn}>  /</Text> 
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  titulo: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50
  },

  input0:{
    backgroundColor: '#A6E6D0',
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    margin: 20
  },

  input1:{
    backgroundColor: '#A2DFF2',
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
    fontSize: 16,
    margin: 20
  },

  btn:{
    alignItems: "center",
    backgroundColor: "#3D79F2",
    margin: 10,
    borderRadius: 10,
    padding: 6,
    width: 40,
    height: 40,
    flexDirection: "row",
    marginLeft: 40,
    marginTop: 30,
    },

  titulobtn:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold"
  }
});