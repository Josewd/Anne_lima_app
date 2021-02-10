import React, { FunctionComponent, useContext, useEffect, useState,  } from 'react';
import database from '@react-native-firebase/database'
import * as ImagePicker from 'react-native-image-picker'
import { MediaType } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage'
import { Alert, Image, Platform, Switch, Text, View } from 'react-native';
import { UserInfoContext } from '../../contexts/UserContext';
import { userDb, ServicesNavigationProp, service, image } from './types'
import { style } from './style'
import { useNavigation } from '@react-navigation/native';
import { InputDefault } from '../components/InputDefault';
import { generateId }from '../../constant'
import { PrimaryButton } from '../components/PrimaryButton';
import { ButtonLink } from '../components/ButtonLink';
import { BottomBar } from '../components/BottomBarIcons';
import { HelperText } from 'react-native-paper';

const Service: FunctionComponent = ()=> {
    const navigator = useNavigation<ServicesNavigationProp>()
    const {user} = useContext(UserInfoContext)
    const [userInfo, setUserInfo] = useState({} as userDb)
    const [service, setService] = useState({} as service)
    const [image, setImage] = useState({}as image)
    const [showHelper, setShowHelper] = useState(false)
    

    useEffect(()=>{
        database().ref(`/user/${user?.uid}`)
        .on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            setUserInfo({...data})
        })
        setService({...service, available:true})
    }, [user])

    if(userInfo.role === 'normal'){
        Alert.alert('User not Allowed')
        navigator.navigate('mainPage')
    }
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
            setImage(source)
          }
        });
      };

    const handleAddService = async ()=>{
        const id  = generateId()
        try {
            if(!service.title){
                throw new Error('must send form')
            }
            await uploadImage(id)
            await database().ref(`/services/${id}`).set(
                service
            )
            setService( {} as service)
            setShowHelper(false)
            navigator.navigate('services')
        } catch (error) {
            setShowHelper(true)
        }
    }

    const uploadImage = async (id:string) => {
        const { uri } = image;
        const filename = id
        const uploadUri = Platform.OS === 'ios' ? uri?.replace('file://', '') : uri 
       try {
           const task = await storage()
             .ref(`services/${filename}`)
             .putFile(uploadUri as string); 
           setShowHelper(false)
       } catch (error) {
           setShowHelper(true)
       }
    }

  return (
   <View style={{flexGrow:1}}>
        <View style={{alignItems: 'center'}}>
            <Image 
              style={style.logo}
              source={require('../../assets/img/brushLogo.png')}
             />
            <Text style={style.title}>New Service</Text>
            {image.uri?(
            <>
            <Image 
              source={image} 
              style={style.profileImage} 
              />
            </>) : 
             <PrimaryButton 
             text='select a picture' 
             onClick={selectImage}
             />}
          <InputDefault 
          icon='bookmark'
          value={service.title}
          placeholder='Title ex: Manicure'
          onChangeText={(text:string)=>{
              setService({...service, title: text})
          }}
          />
          <InputDefault 
          icon='text-document-inverted'
          placeholder='Description'
          value={service.description}
          onChangeText={(text:string)=>{
              setService({...service, description: text})
          }}
          />
          <InputDefault 
          icon='back-in-time'
          placeholder='Duration display Ex: 15 Mins'
          value={service.duration}
          onChangeText={(text:string)=>{
              setService({...service, duration: text})
          }}
          />
          <InputDefault 
         icon='back-in-time'
         value={service.durationTime}
         placeholder='Duration Minutes Ex: 45'
         onChangeText={(text:string)=>{
             setService({...service, durationTime: Number(text)})
         }}
         />
           <InputDefault 
          icon='price-tag'
          keyboardType='numeric'
          placeholder='Price ex 22'
          value={service.price}
          onChangeText={(text)=>{
              setService({...service, price: Number(text)})
          }}
          />
          
          <View style={style.switchContainer}>
              <Text style={style.switchLabel}>Service Available: </Text>
              <Switch 
                thumbColor='#eb42b8'
                trackColor={{true:'#f09ed7', false: 'grey'}}
                value={service.available} 
                onValueChange={()=>setService({...service, available: !service.available})}
                />
          </View>
          <PrimaryButton
            text='Save Service'
            onClick={handleAddService}
          />
           <HelperText
             type="error"
             visible={showHelper}
             style={style.labelError}>
            Missing some inputs!
            </HelperText>
          <ButtonLink
          text='change your mind? '
          boldText='come back'
          onClick={()=> navigator.goBack()}
           />

          </View>
          <BottomBar
          homeChange={()=> navigator.navigate('mainPage')}
          />
   </View>
  );
}

export default Service
