import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { useAuthentication } from '../../hooks/useAuthentication';
import { MainPageNavigationProp } from './types';
import { UserInfoContext } from '../../contexts/UserContext';
import { getTokenData } from '../../constant';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Appbar } from '../components/Appbar';
import { ScrollHorizontal } from '../components/ScrollHorizontal';
import { anne_api } from '../../services/anne_api';
import { AvatarHolder } from '../components/AvatarImage';
import { AvatarText } from '../components/AvatarText';
import { BottomBar } from '../components/BottomBarIcons';
import { style } from './style'

export const MainPage: FunctionComponent = ()=> {
    const navigator = useNavigation<MainPageNavigationProp>()
    if(!useAuthentication()){
        navigator.navigate('login')
    }
    getTokenData().then(tkn=> setToken(tkn as string))
    const [token, setToken] = useState('')
   
    const { userState } = useContext(UserInfoContext)
    const [professionals, setProf] = useState([])
    const [services, setServices] = useState([])
    useEffect(()=>{
        anne_api.get('/professional',{ headers:{
            authorization: token
        }}).then(res=>{
           const elements = res.data.map((e: any)=>{
               const image = {uri: e.avatar}
               const text = `${e.name[0].toUpperCase()}`
               if(image.uri){
                   return <AvatarHolder key={e.id} name={e.name} image={image}/>
               }else{
                   return <AvatarText key={e.id} name={e.name} text={text}/>
               }
            })
            setProf(elements)
        })
        anne_api.get('/service', { headers:{
            authorization: token
        }} ).then(res=>{
            const elements = res.data.result.map((e: any)=>{
                return <Text>{e.title}</Text>
               
             })
             setServices(elements)
            
        })
    },[token])

   const [searchQuery, setSearchQuery] = React.useState('');
   const image = {uri: userState!.avatar}
   const onChangeSearch = (query:string) => setSearchQuery(query);
  return (
    <View style={style.background}>
        <Appbar
        //onClick={}
        image={image}
        text={`Welcome, ${userState?.name} !`}
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
        <BottomBar/>
    </View>
  );
}

