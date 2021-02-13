import React, { FunctionComponent, useContext, useState } from 'react';
import { Text, View, StatusBar, Image, ImageBackground} from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PhoneInput } from '../components/inputs/PhoneMasketInput';
import { style } from './style'
import { ButtonLink } from '../components/buttons/ButtonLink';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { LoginNavigationProp } from './types'
import { useNavigation } from '@react-navigation/native';
import { InputDefault } from '../components/inputs/InputDefault';
import { UserInfoContext } from '../../Context';

const Login:FunctionComponent = ()=>{
    const navigator = useNavigation<LoginNavigationProp>()

    const [confirm, setConfirm] = useState({} as FirebaseAuthTypes.ConfirmationResult);
    const [code, setCode] = useState('');
    const [phoneNumber, setphoneNumber] = useState('')
    const { user } = useContext(UserInfoContext)
    if(user?.uid){
      navigator.navigate('mainPage')
    }
    async function verifyPhoneNumber() {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        console.log(confirmation)
        setConfirm(confirmation);
      }
      async function confirmCode() {
        try {
          confirm.confirm(code)
          if(user.email){
            navigator.navigate('mainPage')
          }else{
            navigator.navigate('signUp')
          }
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
                    <Text style={style.title}>Login</Text>
                  </View>
                    <Text style={style.subTitle}>Log with your phone number</Text>
                <PhoneInput
                placeholder='+353 12 123 1234'
                icon='phone'
                value={phoneNumber}
                onChangeText={(text:string)=>{
                    setphoneNumber(text)
                }}/>
              
                <PrimaryButton
                  text="Log in"
                  onClick={verifyPhoneNumber}
                />
                <ButtonLink 
                  text='Already have an account? '
                  boldText='Sign Up'
                  onClick={()=>navigator.navigate('verifyPhone')}
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
                      style={{width: 90, height:40, marginBottom: -30}}
                      source={require('../../assets/img/brushLogo.png')}
                    />
                    <Text style={style.title}>Confirm Code</Text>
                  </View>
                    <Text style={style.subTitle}>Type de verification code</Text>
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
                    <Text style={style.title}>Login</Text>
                  </View>
                    <Text style={style.subTitle}>Type your phone number</Text>
                <PhoneInput
                placeholder='+353 12 123 1234'
                icon='phone'
                value={phoneNumber}
                onChangeText={(text:string)=>{
                    setphoneNumber(text)
                }}/>
                <PrimaryButton
                  text="Verify Phone Number"
                  onClick={verifyPhoneNumber}
                />
                <ButtonLink 
                  text='Already have an account? '
                  boldText='Sign Up'
                  onClick={()=>navigator.navigate('verifyPhone')}
                />
               </View>
            </View>
            )
              
          }
}

export default Login

