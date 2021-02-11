import React, { FunctionComponent, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { MainPageNavigationProp } from './types';
import { ImageBackground, StatusBar,  Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Appbar } from '../components/Appbar';
import { ScrollHorizontal } from '../components/ScrollHorizontal';
import { BottomBar } from '../components/BottomBarIcons';
import { style } from './style'
import { UserInfoContext } from '../../contexts/UserContext';
import  database from '@react-native-firebase/database'

export const MainPage: FunctionComponent = ()=> {
    const {user, userDB} = useContext(UserInfoContext) 
    const navigator = useNavigation<MainPageNavigationProp>()
    if(!user){
        navigator.navigate('login')
    }

    const [professionals, setProf] = useState([])
    const [services, setServices] = useState([])
  
   const [searchQuery, setSearchQuery] = React.useState('');
   const image = {uri: user?.photoURL}
   const onChangeSearch = (query:string) => setSearchQuery(query);
  
  return (
    <View style={style.background}>
        <Appbar
        onClick={()=> navigator.navigate('userProfile')}
        image={image}
        text={`Welcome, ${user?.displayName} !`}
         />
      <StatusBar translucent backgroundColor='transparent'/>
        <View style={style.containerTop}>
            <ImageBackground 
            style={style.bkImage}
            source={require('../../assets/img/pedicure2.png')}>
            <Text style={style.title}>Find and book the best services in town!</Text>
            <Searchbar
             iconColor='#eb42b8'
             style={style.serchBar}
             placeholder="Manicure Shellac"
             onChangeText={onChangeSearch}
             value={searchQuery}
            />
            </ImageBackground>
            <ScrollHorizontal title='Our Specialists:'>
                {professionals}
            </ScrollHorizontal>
            <ScrollHorizontal title='Our Services:'>
                {services}
            </ScrollHorizontal>
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

