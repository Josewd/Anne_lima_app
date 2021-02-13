import React, { FunctionComponent, useState } from 'react';
import { Alert, Image, ImageBackground, Platform, StatusBar, Text, TouchableOpacity, View, } from 'react-native';
import * as ImagePicker from 'react-native-image-picker'
import storage from '@react-native-firebase/storage'
import auth from '@react-native-firebase/auth'
import {UploadProfileImgNavigationProp, image} from './types'
import { useNavigation } from '@react-navigation/native';
import { MediaType } from 'react-native-image-picker';
import { style } from './style';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
 

 const UploadProfileImg: FunctionComponent =()=> {
     const navigator = useNavigation<UploadProfileImgNavigationProp>()
    const [image, setImage] = useState({}as image);

    const selectImage = () => {
        const media:MediaType = 'photo'
        const options = {
          maxWidth: 2000,
          maxHeight: 2000,
          mediaType: media
        };
        ImagePicker.launchImageLibrary(options ,response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
          }else {
            const source = { uri: response.uri };
            console.log(source);
            setImage(source);
          }
        });
      };

      const uploadImage = async () => {
        const user = auth().currentUser
        const { uri } = image;
        const filename = user?.uid
        const uploadUri = Platform.OS === 'ios' ? uri?.replace('file://', '') : uri 
        const task = storage()
          .ref(`users/${filename}`)
          .putFile(uploadUri as string);
        
        try {
            await task;
          } catch (e) {
            console.error(e);
          }
          user!.updateProfile({
              photoURL: image.uri
          })
          Alert.alert('Photo uploaded!');
          setImage({}as image);
          navigator.navigate('mainPage')
        
    }
  
  return (
        <View >
            <StatusBar translucent backgroundColor='transparent'/>
            <ImageBackground
      style={style.backgroundImage} 
      source={require('../../assets/img/manicure2.jpg')}
    >
    </ImageBackground>
            <View style={style.containerAbsolute}>
             <View style={{alignItems: 'center'}}>
                <Image 
                 style={style.logoPicture}
                 source={require('../../assets/img/brushLogo.png')}
                    />
             <Text style={style.title}>Choose a Picture</Text>
            </View>
                <Text style={style.subTitle}>Upload a profile picture</Text>   
                <View style={style.container}>
                    {image.uri? (
                        <>
                    <Image source={{ uri: image.uri }} style={style.profileImage} />
                    <PrimaryButton text='Upload image' onClick={uploadImage}/>
                    </>) :  <PrimaryButton text='select a picture' onClick={selectImage}/>}
               </View>
             </View>
            </View>
  );
}

export default UploadProfileImg