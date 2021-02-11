import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { UserInfoContext } from '../../contexts/UserContext';
import { Appbar } from '../components/Appbar'
import { BottomBar } from '../components/BottomBarIcons';
import { SettingButton } from './components/SettingButton';
import { AdminPageNavigationProp } from './types';
import { style } from './style'



const AdminPage: FunctionComponent = ()=> {
    const navigator = useNavigation<AdminPageNavigationProp>()
    const { user, userDB } = useContext(UserInfoContext)
    console.log(userDB)
  return (
   <View style={{flexGrow:1}}>
       <Appbar
        onClick={()=>{}}
        image={{uri: user.photoURL}}
        text={`Admin: ${user?.displayName}`}
       />
       <ImageBackground
        source={require('../../assets/img/admin.jpg')}
        style={{width: '100%', height: 80}}
       >
       </ImageBackground>
       <View style={style.buttonContainer}>
       <SettingButton >
            see Users
       </SettingButton>
       <SettingButton>
            see Staff
       </SettingButton>
       <SettingButton onClick={()=>navigator.navigate('services')}>
            new service
       </SettingButton>
       <SettingButton>
            Edit Service
       </SettingButton>
       </View>
       <BottomBar
            homeChange={()=> navigator.navigate('mainPage')}
            settingChange={()=>{ 
                if( userDB?.role === 'admin'){
                 navigator.navigate('adminPage')
                }else{
                 navigator.navigate('userProfile')}
             }}
       />
   </View>
  );
}



export default AdminPage
