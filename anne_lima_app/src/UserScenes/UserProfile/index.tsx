import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Alert, Text, View, ActivityIndicator } from 'react-native';
import { UserInfoContext } from '../../Context';
import { BottomBar } from '../components/barsNavigation/BottomBarIcons';
import { ProfileTopBar } from '../components/barsNavigation/ProfileTopBar';
import { UserProfileNavigationProp, userDb} from './types'
import database from '@react-native-firebase/database'
import { InputDefault } from '../components/inputs/InputDefault';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { ButtonLink } from '../components/buttons/ButtonLink';
import { DateInput } from '../components/inputs/DateMaskedInput'
import auth from '@react-native-firebase/auth'
import { style } from './style'
 
const UserProfile: FunctionComponent= ()=> {
    const navigator = useNavigation<UserProfileNavigationProp>()
    const { user } = useContext(UserInfoContext)
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo]= useState({} as userDb)
    useEffect(()=>{
       database().ref(`/user/${user?.uid}`)
        .on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            setUserInfo({...data})
       })
    }, [user])

        const handleUpdate = async ()=>{
            setLoading(true)
            database().ref(`/user/${user?.uid}`)
            .update({
                name: userInfo.name,
                email: userInfo.email,
                birthday: userInfo.birthday
            })
            try {
                await auth().currentUser?.updateEmail(userInfo.email)
                await auth().currentUser?.updateProfile({
                    displayName: userInfo.name
                })
                setLoading(false)
                navigator.navigate('mainPage')
                
            } catch (error) {
               Alert.alert(error.message) 
            }
        }
    
  return (
  <View style={{flexGrow:1}}>
      <ProfileTopBar
       avatar={{uri: user.photoURL}}
       onClick={()=> navigator.goBack()}
       onClickAvatar={()=> navigator.navigate('uploadProfileImg')}
      />
      <View style={style.userInfoContainer}>
          <Text style={style.name}>{user.displayName}</Text>
            <InputDefault
            icon='user'
            value={userInfo.name}
            secureTextEntry={false}
            onChangeText={(text:string)=>{
                setUserInfo({...userInfo, name: text})
            }}
            />
             <InputDefault
            icon='email'
            value={userInfo.email}
            secureTextEntry={false}
            onChangeText={(text:string)=>{
                setUserInfo({...userInfo, email: text})
            }}
            />
             <DateInput
            icon='calendar'
            value={userInfo.birthday}
            onChangeText={(text:string)=>{
                setUserInfo({...userInfo, birthday: text})
            }}
            />
             {loading? <ActivityIndicator size="large" color='#eb42b8'/> : 
             <PrimaryButton text='Update Profile'  onClick={handleUpdate}/>}
      </View>
          <View style={style.buttonContainer}>
           <ButtonLink 
                text='Do you want to leave?' 
                boldText='log out'
                onClick={async()=>{
                    auth().signOut()
                    navigator.navigate('login') 
                }}
                />
          </View>
      <BottomBar homeChange={()=> navigator.navigate('mainPage')}
        settingChange={()=>{ 
           if( userInfo.role === 'admin'){
            navigator.navigate('adminPage')
           }else{
            navigator.navigate('userProfile')}
        }}
      />
  </View>
  );
}


export default UserProfile