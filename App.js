import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import ImageViewer from './component/ImageViewer';
import Button from './component/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import IconButtom from './component/IconButton';
import CircleButton from './component/CircleButton';
import EmojiPicker from './component/EmojiPicker'

const placeholderImage = require('./assets/images/images.jpeg');

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(null);
  const [isModalVisible,setIsModalVisible] = useState(false);


  const pickImageASync = async() => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality:1
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('Voce não selecionou nenhuma imagem.');
    };
  };


  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true)
  };

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
    
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}/>
        </View>
        {showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButtom icon="refresh" label="Reset" onPress={onReset}/>
              <CircleButton onPress={onAddSticker}/>
              <IconButtom icon="save-alt" label={"Save"} onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button label={'Escolha uma foto'} theme={"primary"} onPress={pickImageASync}/>
            <Button label={'Usar essa foto'} onPress={() => setShowAppOptions(true)}/>
          </View>
        )}
          <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
            
          </EmojiPicker>
          <StatusBar style="auto" />
      </View>        
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },  
  footerContainer:{
    flex:1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
