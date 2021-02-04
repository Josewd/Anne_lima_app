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

export const MainPage: FunctionComponent = ()=> {
    const navigator = useNavigation<MainPageNavigationProp>()
    if(!useAuthentication()){
        navigator.navigate('login')
    }
    getTokenData().then(tkn=> setToken(tkn as string))
    const [token, setToken] = useState('')
   
    const { userState } = useContext(UserInfoContext)
    const [professionals, setProf] = useState([])
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
        </View>
        <BottomBar></BottomBar>
    </View>
  );
}

const style = StyleSheet.create({
    backgroundDark:{
        backgroundColor: '#030013',
        opacity: 0.89,
        flexGrow: 1
    },
    background: {
        flexGrow:1
    },
    containerTop:{
        height: 320, 
        alignItems:'center', 
    },
    serchBar: {
        width:'80%', 
        marginBottom: 95, 
        marginRight:5, 
        height:40, 
        opacity: 0.8,
        borderRadius:15,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold', 
        color: '#fff', 
        fontSize: 18,
        marginBottom: 10 
    },
    bkImage:{
        width: '100%', 
        height: '100%' ,
        alignItems:'center', 
        justifyContent:'flex-end'
    }
})