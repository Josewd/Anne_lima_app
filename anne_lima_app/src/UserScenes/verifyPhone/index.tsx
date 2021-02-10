import React, { FunctionComponent, useState } from 'react';
import { Text, View, StatusBar, Image, ImageBackground} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PhoneInput } from '../components/PhoneMasketInput';
import { style } from './styles'
import { ButtonLink } from '../components/ButtonLink';
import { PrimaryButton } from '../components/PrimaryButton';
import { VerifyPhoneNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native';
import { InputDefault } from '../components/InputDefault';

const VerifyPhone:FunctionComponent = ()=>{
    const navigator = useNavigation<VerifyPhoneNavigationProp>()
    const [confirm, setConfirm] = useState({} as FirebaseAuthTypes.ConfirmationResult);
    const [code, setCode] = useState('');
    const [phoneNumber, setphoneNumber] = useState('')
    const user = auth().currentUser
    async function verifyPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation)
        setConfirm(confirmation);
      }
      async function confirmCode() {
        try {
          confirm.confirm(code)
          navigator.navigate('signUp')
        } catch (error) {
          console.log('Invalid code.');
        }
      }

        if (!user?.phoneNumber) {
            if (!confirm.confirm) {
              return (
                <View>
                <StatusBar translucent backgroundColor='transparent'/>
                <ImageBackground
                  style={style.backgroundImage} 
                  source={require('../../assets/img/manicure2.jpg')}
                >
                </ImageBackground>
                <View style={style.containerAbsolute}>
                  <View style={{alignItems: 'center'}}>
                    <Image 
                      style={style.logo}
                      source={require('../../assets/img/brushLogo.png')}
                    />
                    <Text style={style.title}>Phone Number</Text>
                  </View>
                    <Text style={style.subTitle}>We will send a verification code by SMS</Text>
                <PhoneInput
                placeholder='+353 12 123 1234'
                icon='phone'
                value={phoneNumber}
                onChangeText={(text:string)=>{
                    setphoneNumber(text)
                }}/>
                <PrimaryButton
                  text="Send Code"
                  onClick={verifyPhoneNumber}
                />
                <ButtonLink 
                  text='Already have an account? '
                  boldText='Log in'
                  onClick={()=>navigator.navigate('login')}
                />
               </View>
            </View>
        
              );
            }
            return (
                <View>
                    <StatusBar translucent backgroundColor='transparent'/>
                    <ImageBackground 
                    style={style.backgroundImage} 
                    source={require('../../assets/img/manicure2.jpg')}
                    >
                    </ImageBackground>
                <View style={style.containerAbsolute}>
                  <View style={{alignItems: 'center'}}>
                    <Image 
                      style={style.logo}
                      source={require('../../assets/img/brushLogo.png')}
                    />
                    <Text style={style.title}>Verify Phone Number</Text>
                  </View>
                    <Text style={style.subTitle}>digit your phone number</Text>
                    <InputDefault 
                        secureTextEntry={false} 
                        icon='lock' 
                        placeholder='code' 
                        value={code} 
                        onChangeText={text => setCode(text)} 
                        />
                    <PrimaryButton
                        text="Confirm code"
                        onClick={confirmCode}
                        />
               </View>
            </View>
             
            );
          } else{
              return <View></View>
          }
}

export default  VerifyPhone

