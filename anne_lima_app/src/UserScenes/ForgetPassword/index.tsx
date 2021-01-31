import React, { FunctionComponent, useContext, useState } from 'react';
import { View, Text, StatusBar } from 'react-native'
import { ForgetNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { UserInfoContext } from '../../contexts/UserContext';
import { ForgetPageText } from './text';
import { darkStyle, style } from './style'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { anne_api } from '../../services/anne_api';
import { Appbar, HelperText } from 'react-native-paper'

export const ForgetPassword:FunctionComponent = ()=> {
    const [showHelper, setShowHelper] = useState(false)
    const { isDark } = useContext(UserInfoContext)
    const navigator = useNavigation<ForgetNavigationProp>()
    const [form, setForm] = useState({email: ''})



    const loginHandle = ()=>{
      anne_api.post('/user/forget_password', form)
      .then(res=>{
        console.log(res.data)
        setShowHelper(false)
      }).catch(err=>{
        console.log(err.message)
        setShowHelper(true)
      })
    }

  return (
  <View>
      <Appbar.Header style={isDark? darkStyle.appbar :style.appbar}>
        <Appbar.BackAction 
            color={isDark? 'white': 'black'} 
            onPress={()=>navigator.goBack()}/>
        <Appbar.Content title=' ' />
      </Appbar.Header>
    <View style={isDark? darkStyle.containerAbsolute :style.containerAbsolute}>
        <Text style={isDark? darkStyle.title :style.title}>{ForgetPageText.TITLE}</Text>
        <Text style={style.subTitle}>{ForgetPageText.SUBTITLE}</Text>
        
          <InputDefault
            secureTextEntry={false}
            icon='email'
            value={form.email}
            onChangeText={(text)=> {setForm({...form, email: text})}}
            placeholder='exemple@exemple.com'
          />
          <HelperText
              type="error"
              visible={showHelper}
              style={style.labelError}>
              {ForgetPageText.ERROR_MESSAGE}
            </HelperText>

          <PrimaryButton
            text='Send Email'
            onClick={loginHandle}
          />
        
      </View>
  </View>
  );
}

