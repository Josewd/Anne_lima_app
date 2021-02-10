import { useNavigation } from '@react-navigation/native';
import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Alert, Text, View, ActivityIndicator } from 'react-native';
import { UserInfoContext } from '../../contexts/UserContext';
import { BottomBar } from '../components/BottomBarIcons';
import { ProfileTopBar } from '../components/ProfileTopBar';
import { UserProfileNavigationProp, userDb} from './types'
import database from '@react-native-firebase/database'
import { InputDefault } from '../components/InputDefault';
import { PrimaryButton } from '../components/PrimaryButton';
import { ButtonLink } from '../components/ButtonLink';
import { DateInput } from '../components/DateMaskedInput'
import auth from '@react-native-firebase/auth'
import { style } from './style'
 
const UserProfile: FunctionComponent= ()=> {
    const navigator = useNavigation<UserProfileNavigationProp>()
    const { user, setUser } = useContext(UserInfoContext)
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo]= useState({} as userDb)
    useEffect(()=>{
       database().ref(`/user/${user?.uid}`)
        .on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            setUserInfo({...data})
        console.log(userInfo)})
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
                const updatedUser = auth().currentUser
                setUser(updatedUser)
                console.log(user)
                navigator.navigate('userProfile')
                
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
                onClick={()=>{}}
                />
          </View>
      <BottomBar homeChange={()=> navigator.navigate('mainPage')}/>
  </View>
  );
}


export default UserProfile