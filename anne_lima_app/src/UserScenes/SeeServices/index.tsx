import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext } from 'react';
import { ImageBackground, View, ListRenderItem, FlatList, Text } from 'react-native';
import { UserInfoContext } from '../../Context';
import { Appbar } from '../components/barsNavigation/Appbar';
import { service } from '../MainPage/types';
import { SeeServicesNavigationProp } from './types';
import { ServiceCard } from '../components/Cards/ServiceCard';
import { BottomBar } from '../components/barsNavigation/BottomBarIcons';
import { style } from './style'

const SeeServices: FunctionComponent = ()=> {
    const navigator = useNavigation<SeeServicesNavigationProp>()
    const { user, userDB, dataService} = useContext(UserInfoContext)

    const renderItem : ListRenderItem<service> = ({item, index})=>{
        return <View>
        <ServiceCard key={index}
         title={item.title}
         duration={item.duration}
         image={item.id}
         price={item.price}
         description={item?.description}
         button='Edit'
         onClick={()=>navigator.navigate('services', {
            service: {
                title: item.title,
                description: item?.description,
                duration: item.duration,
                durationTime: item.durationTime,
                price: item.price,
                available: item.available
            } as service,
            id: item.id
         })}
         />
        </View>
}
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
    
    <View style={style.flatListView}>
        <Text style={style.serviceLabel}>Services: </Text>
            <FlatList
                data={dataService}
                renderItem={(item)=> renderItem(item)}
                keyExtractor={(item, idx) => idx.toFixed()}
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

export default SeeServices
