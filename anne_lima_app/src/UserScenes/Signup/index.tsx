import React, { FunctionComponent, useContext, useState } from 'react';
import { View, Text, StatusBar , Alert} from 'react-native'
import { SignUpNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { UserInfoContext } from '../../contexts/UserContext';
import { SignUpPageText } from './text';
import {  style } from './style'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { ButtonLink } from '../components/ButtonLink';
import { anne_api } from '../../services/anne_api';
import { HelperText } from 'react-native-paper'
import { PhoneInput } from '../components/PhoneMasketInput';
import { DateInput } from '../components/DateMaskedInput';
import { storeTokenData, storeUserData, validateEmail } from '../../constant';
import { UserInterface } from '../../Global/UserProvider'

export const SignUp:FunctionComponent = ()=> {
    const [showPassword, setShowPassword] = useState(true)
    const [showHelper, setShowHelper] = useState(false)
    const { setUserState} = useContext(UserInfoContext)
    const navigator = useNavigation<SignUpNavigationProp>()
    const [form, setForm] = useState({name: '',
                                      email: '', 
                                      password: '', 
                                      phone_number:'',
                                      birthday: '',
                                      role: 'normal'
                                    })
    const [confirmPassword, setConfirmPassword] = useState('')

    const SignUpHandle = async()=>{
        if(validateEmail(form.email)){
            anne_api.post('/user', form)
            .then(res=>{
              const user: UserInterface = res.data.user
              storeUserData(user)
              storeTokenData(res.data.token)
              setUserState({
                id: user.id,
                name: user.name,
                birthday: user.birthday,
                email: user.email,
                phone_number: user.phone_number,
                role: user.role,
                avatar: user.avatar
            })
              setShowHelper(false)
            }).catch(err=>{
              console.log(err.message)
              setShowHelper(true)
            })
        }else{
            Alert.alert('invalid email')
        }
    }

  return (
    <View>
    <StatusBar translucent backgroundColor='transparent'/>

    <View style={style.containerAbsolute}>
        <Text style={style.title}>{SignUpPageText.TITLE}</Text>
        <Text style={style.subTitle}>Create your account</Text>
        
        <InputDefault
            secureTextEntry={false}
            icon='user'
            value={form.name}
            onChangeText={(text)=> {setForm({...form, name: text})}}
            placeholder='name'
          />
          <InputDefault
            secureTextEntry={false}
            icon='email'
            value={form.email}
            onChangeText={(text)=> {setForm({...form, email: text})}}
            placeholder='exemple@exemple.com'
          />
           <PhoneInput
            icon='phone'
            value={form.phone_number}
            onChangeText={(text)=> {setForm({...form, phone_number: text})}}
            placeholder='353 83 234 2345'
          />
           <DateInput
            icon='calendar'
            value={form.birthday}
            onChangeText={(text)=> {setForm({...form, birthday: text})}}
            placeholder='dd/mm/yyyy'
          />
           <InputDefault
            secureTextEntry={showPassword}
            icon='lock'
            value={form.password}
            onChangeText={(text)=> setForm({...form, password: text})}
            placeholder='password'
            iconEye={true}
            onClick={()=> setShowPassword(!showPassword)}
          />
           <InputDefault
            secureTextEntry={showPassword}
            icon='lock'
            value={confirmPassword}
            onChangeText={(text)=> {
                if(text !== form.password){
                    setShowHelper(true)
                }else{
                    setShowHelper(false)
                }
                setConfirmPassword(text)
            }
            }
            placeholder='confirm password'
            iconEye={true}
            onClick={()=> setShowPassword(!showPassword)}
          />
          <HelperText
              type="error"
              visible={showHelper}
              style={style.labelError}>
              {SignUpPageText.ERROR_MESSAGE}
            </HelperText>

          <PrimaryButton
            text='Sign Up'
            onClick={SignUpHandle}
          />
          <ButtonLink 
           isDark={isDark}
            text='Already have an account? '
            boldText='Log in'
            onClick={()=>navigator.navigate('login')}
          />
      </View>
  </View>
  );
}

