import React, { FunctionComponent, useState } from 'react';
import { View, Text, Image, } from 'react-native'
import { ForgetNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native'
import { ForgetPageText } from './text';
import { style } from './style'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { anne_api } from '../../services/anne_api';
import { HelperText, Portal, Dialog, Provider } from 'react-native-paper'


export const ForgetPassword:FunctionComponent = ()=> {
    const [showHelper, setShowHelper] = useState(false)
    const navigator = useNavigation<ForgetNavigationProp>()
    const [form, setForm] = useState({email: ''})
    const [showDialog, setShowDialog] = useState(false)



    const sendEmailHandle = ()=>{
      anne_api.post('/user/forget_password', form)
      .then(res=>{
        console.log(res.data)
        setShowHelper(false)
        setShowDialog(true)
      }).catch(err=>{
        console.log(err.message)
        setShowHelper(true)
      }) 
    }

  return (
    <View style={style.containerAbsolute}>
        <Text style={style.title}>{ForgetPageText.TITLE}</Text>
        <Text style={style.subTitle}>{ForgetPageText.SUBTITLE}</Text>
        <View style={style.logoContainer}>
          <Text style={style.logoTitle}>ANNE LIMA nail design</Text>
          <Image 
            style={{width: 90, height:40, marginTop: -20}}
            source={require('../../assets/img/brushLogo.png')}
          />
        </View>
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
            onClick={sendEmailHandle}
          />
        <Provider>

      <Portal>
        <Dialog style={style.dialogContainer} visible={showDialog}>
          <Dialog.Content>
            <View >
            <Text style={style.dialogTitle}>{ForgetPageText.DIALOG_TEXT}</Text>
              <Text style={style.subTitle}>{ForgetPageText.DIALOG_SUBTEXT}</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions style={style.dialogButton}>
            <PrimaryButton 
            text='Go Back'
            onClick={()=>navigator.goBack()}
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>
        </Provider>
        
      </View>

  );
}

