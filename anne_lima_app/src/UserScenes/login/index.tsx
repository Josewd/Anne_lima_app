import React, { FunctionComponent, useContext, useState } from 'react';
import { View, Text, ImageBackground, StatusBar} from 'react-native'
import { LoginNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { UserInfoContext } from '../../contexts/UserContext';
import { LoginPageText } from './text';
import { darkStyle, style } from './style'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { ButtonLink } from '../components/ButtonLink';
import { anne_api } from '../../services/anne_api';
import { HelperText } from 'react-native-paper'
import { storeTokenData, storeUserData } from '../../constant';
import { UserInterface } from '../../Global/UserProvider';


export const Login:FunctionComponent = ()=> {
    const [showPassword, setShowPassword] = useState(true)
    const [showHelper, setShowHelper] = useState(false)
    const { setUserState } = useContext(UserInfoContext)
    const navigator = useNavigation<LoginNavigationProp>()
    const [form, setForm] = useState({email: '', password: ''})



    const loginHandle = ()=>{
      anne_api.post('/user/login', form)
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
      console.log(res.data)
      navigator.navigate('mainPage')
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

    <View style={style.containerAbsolute}>
        <Text style={style.title}>{LoginPageText.TITLE}</Text>
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
            text={LoginPageText.FORGET_PASSWORD}
            onClick={()=>navigator.navigate('forgetPassword')}
          />

          <PrimaryButton
            text='Login'
            onClick={loginHandle}
          />
          <ButtonLink 
            text='Don`t have an account yet? '
            boldText='Sign Up'
            onClick={()=>navigator.navigate('signUp')}
          />
      </View>
  </View>
  );
}

