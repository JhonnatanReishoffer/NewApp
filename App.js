import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import {useState} from 'react'
import {ModalPassword} from './src/components/modal/index.js'

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&*<>"

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPassowrdValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generetePassword(){
    let password = "";
    for(let i=0, n = charSet.length; i < size; i++){
      password += charSet.charAt(Math.floor(Math.random() * n))
    };

    setPassowrdValue(password)
    setModalVisible(true)
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/logo.png")}
        style = {styles.logo}
      />

      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height:40 }}
          minimumValue={6}
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0)) }
          maximumValue={20}
          maximumTrackTintColor='#000000'
          minimumTrackTintColor='#0000ff'
          thumbTintColor='#0000ff'
        />
      </View>

      <TouchableOpacity style={styles.buttom} onPress={generetePassword}>
        <Text style={styles.buttomText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 60,
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:"#FFF",
    borderRadius:45,
    padding:8,
  },
  buttom:{
    backgroundColor:"#392de9",
    width:"80%",
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:45,
  },
  buttomText:{
    color:'#fff',
    fontSize:20,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',    
  }
});
