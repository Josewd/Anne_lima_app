import React, { FunctionComponent, useContext, useState } from 'react';
import { View, Text, ImageBackground, StatusBar , Switch} from 'react-native'
import { LoginNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { UserInfoContext } from '../../contexts/UserContext';
import { LoginPageText } from './text';
import { darkStyle, style } from './style'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { ButtonLink } from '../components/ButtonLink';
import { anne_api } from '../../services/anne_api';
import { Appbar, HelperText } from 'react-native-paper'

export type user = {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  birthday: string;
}

export const Login:FunctionComponent = ()=> {
    const [showPassword, setShowPassword] = useState(true)
    const [showHelper, setShowHelper] = useState(false)
    const { setUserState, isDark, setIsDark } = useContext(UserInfoContext)
    const navigator = useNavigation<LoginNavigationProp>()
    const [form, setForm] = useState({email: '', password: ''})



    const loginHandle = ()=>{
      anne_api.post('/user/login', form)
      .then(res=>{
        console.log(res.data.user)
        const dataUser: user = res.data.user
        setUserState({
          id: dataUser.id,
          name: dataUser.name,
          email: dataUser.email,
          phone: dataUser.phone_number,
          birthday: dataUser.birthday
        })
        setShowHelper(false)
      }).catch(err=>{
        console.log(err.message)
        setShowHelper(true)
      })
    }

  return (
  <View>
    <StatusBar translucent backgroundColor='transparent'/>
    <ImageBackground 
      style={style.backgroundImage} 
      source={require('../../assets/img/manicure2.jpg')}
    />

    <Switch 
      value={isDark} 
      onValueChange={()=> setIsDark(!isDark)} 
      style={{position: 'absolute', top: 50, right: 20}}
      />

    <View style={isDark? darkStyle.containerAbsolute :style.containerAbsolute}>
        <Text style={isDark? darkStyle.title :style.title}>{LoginPageText.TITLE}</Text>
        <Text style={style.subTitle}>Login to your account</Text>
          <InputDefault
            secureTextEntry={false}
            icon='email'
            value={form.email}
            onChangeText={(text)=> {setForm({...form, email: text})}}
            placeholder='exemple@exemple.com'
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
          <HelperText
              type="error"
              visible={showHelper}
              style={style.labelError}>
              {LoginPageText.ERROR_MESSAGE}
            </HelperText>

          <ButtonLink 
            isDark={isDark}
            text={LoginPageText.FORGET_PASSWORD}
            onClick={()=>navigator.navigate('forgetPassword')}
          />

          <PrimaryButton
            text='Login'
            onClick={loginHandle}
          />
          <ButtonLink 
           isDark={isDark}
            text='Don`t have an account yet? '
            boldText='Sign Up'
            onClick={()=>console.log('signup')}
          />
      </View>
  </View>
  );
}

