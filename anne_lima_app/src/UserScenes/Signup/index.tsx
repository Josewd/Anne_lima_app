import React, { FunctionComponent, useContext, useState } from 'react';
import { View, Text, StatusBar , ImageBackground, Image, ActivityIndicator, Alert} from 'react-native'
import { SignUpNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { SignUpPageText } from './text';
import {  style } from './style'
import { InputDefault } from '../components/inputs/InputDefault';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { ButtonLink } from '../components/buttons/ButtonLink';
import { HelperText } from 'react-native-paper'
import { DateInput } from '../components/inputs/DateMaskedInput';
import { validateEmail } from '../../constant';
import database from '@react-native-firebase/database'
import { UserInfoContext } from '../../Context';



export const SignUp:FunctionComponent = ()=> {
    const [showHelper, setShowHelper] = useState(false)
    const navigator = useNavigation<SignUpNavigationProp>()
    const [emailPin, setEmailPin] = useState({email: ''})
    const { user } = useContext(UserInfoContext)
    const [loading, setLoading] = useState(false)
    const [firstScene, setFirstScene] = useState(true)
    const [errorMessage, setErrorMessage]=useState('')
    const [form, setForm] = useState({name: '',
                                      phone_number:'',
                                      birthday: '',
                                      role: 'normal'
                                    })
    const savingUserToDataBase = ()=>{
     database().ref(`/user/${user?.uid}`).set({
      name: form.name,
      email: emailPin.email,
      birthday: form.birthday,
      role: form.role
    }).then(()=>{
        console.log('user saved!')
      }).catch(err=> console.log(err))
      user?.updateProfile({
        displayName: form.name
      })
      try {
        user?.updateEmail(emailPin.email)
        navigator.navigate('uploadProfileImg') 
      } catch (error) {
        setErrorMessage(error.message)
        setShowHelper(true)
      }
    }

    const SignUpHandle = async()=>{
        if(validateEmail(emailPin.email)){
     
          setFirstScene(false)
          }else{
            setErrorMessage('Email is invalid')
            setShowHelper(true)  
          }
  }
const page = firstScene? <View>
                <StatusBar translucent backgroundColor='transparent'/>
                <ImageBackground
                  style={style.backgroundImage} 
                  source={require('../../assets/img/manicure.jpg')}
                >
                </ImageBackground>
                <View style={style.containerAbsolute}>
                  <View style={{alignItems: 'center'}}>
                    <Image 
                      style={style.logo}
                      source={require('../../assets/img/brushLogo.png')}
                    />
            <Text style={style.title}>{SignUpPageText.TITLE}</Text>
          </View>
            <Text style={style.subTitle}>Create your account</Text>
                <InputDefault
                  secureTextEntry={false}
                  icon='email'
                  value={emailPin.email}
                  onChangeText={(text)=> {setEmailPin({...emailPin, email: text})}}
                  placeholder='exemple@exemple.com'
                />
                  <HelperText
                    type="error"
                    visible={showHelper}
                    style={style.labelError}>
                    {errorMessage}
                  </HelperText>
                
                    <PrimaryButton
                     text='Next'
                     onClick={SignUpHandle}
                    />
                  
                <ButtonLink 
                  text='Already have an account? '
                  boldText='Log in'
                  onClick={()=>navigator.navigate('login')}
                />
            </View>
        </View> : 
         <View>
           <StatusBar translucent backgroundColor='transparent'/>
                <ImageBackground
                  style={style.backgroundImage} 
                  source={require('../../assets/img/manicure.jpg')}
                >
                </ImageBackground>
                <View style={style.containerAbsolute}>
                  <View style={{alignItems: 'center'}}>
                    <Image 
                      style={style.logo}
                      source={require('../../assets/img/brushLogo.png')}
                    />
        <Text style={style.title}>{SignUpPageText.TITLE}</Text>
      </View>
        <Text style={style.subTitle}>Create your account</Text>
            <InputDefault
              secureTextEntry={false}
              icon='user'
              value={form.name}
              onChangeText={(text)=> {setForm({...form, name: text})}}
              placeholder='username'
            />
            <DateInput
              icon='calendar'
              value={form.birthday}
              onChangeText={(text)=> {setForm({...form, birthday: text})}}
              placeholder='dd/mm/yyyy'
            />
          
              {loading? <ActivityIndicator size="large" color='#eb42b8'/> :<PrimaryButton
              text='Next'
              onClick={()=>savingUserToDataBase()}
            />}
            <ButtonLink 
              text='Already have an account? '
              boldText='Log in'
              onClick={()=>navigator.navigate('login')}
            />
      </View>
  </View>
    return page
    
}