import React, { FunctionComponent, memo,  useContext } from 'react';
import { useNavigation } from '@react-navigation/native'
import { MainPageNavigationProp, service } from './types';
import { FlatList, ImageBackground, ListRenderItem, StatusBar,  Text, View } from 'react-native';
import { Appbar } from '../components/barsNavigation/Appbar';
import { ScrollHorizontal } from '../components/ScrollHorizontal';
import { BottomBar } from '../components/barsNavigation/BottomBarIcons';
import { style } from './style'
import { UserInfoContext } from '../../Context';
import { ServiceCard } from '../components/Cards/ServiceCard';

export const MainPage:FunctionComponent = ()=> {
    const {user, userDB, dataService} = useContext(UserInfoContext) 
    const navigator = useNavigation<MainPageNavigationProp>()
    if(!user?.uid){
        navigator.navigate('login')
    }
    
   const renderItem : ListRenderItem<service> = ({item, index})=>{
        if(item.available){
        return <View>
            <ServiceCard key={index}
            title={item.title}
            duration={item.duration}
            image={item.id}
            price={item.price}
            description={item?.description}
            button='book'
            onClick={()=>{}}
            />
            </View>
        }else{
            return <></>
        }
   }
  
  return (
    <View style={style.background}>
        <Appbar
        onClick={()=> navigator.navigate('userProfile')}
        image={{uri: user?.photoURL}}
        text={`Welcome, ${user?.displayName} !`}
         />
      <StatusBar translucent backgroundColor='transparent'/>
        <View style={style.containerTop}>
            <ImageBackground 
            style={style.bkImage}
            source={require('../../assets/img/pedicure2.png')}>
            <Text style={style.title}>Find and book the best services in town!</Text>
           
            </ImageBackground>
        <ScrollHorizontal  horizontal={true} title='Ours Specialists'>

        </ScrollHorizontal>
        </View>
            <View style={style.flatListView}>
                <Text style={style.serviceLabel}>Ours Services: </Text>
              <FlatList
                data={dataService}
                renderItem={(item)=> renderItem(item)}
                keyExtractor={item => item.id}
                />
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

