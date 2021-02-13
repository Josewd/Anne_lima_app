import React, { FunctionComponent, useEffect, useState } from 'react';
import { UserInfoContext } from '../Context'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import database from '@react-native-firebase/database'
import { userDb } from '../UserScenes/UserProfile/types';
import { createArrayService } from '../constant';
import { service } from '../UserScenes/MainPage/types';
import { useAuth } from '../hooks/useAuthentication';

export const UserProvider = React.memo(function UserProvider(props) {
  const [dataService, setDataService] = useState([]as service[])
  const [userDB, setUserDB]= useState({} as userDb)

  const { initializing, user } = useAuth()
  
  async function onAuthStateChanged (user: any) {
     const url =  await storage().ref(`users/${user.uid}`)
      .getDownloadURL()
      auth().currentUser?.updateProfile({
        photoURL: url
      })
      database().ref(`/user/${user?.uid}`)
      .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          setUserDB({...data})
      })
       database().ref(`/services`)
    .on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        setDataService([] as service[])
        createArrayService(data, dataService, setDataService) 
    })
  }

  useEffect(() => {
    onAuthStateChanged(user)
  }, [user]);
    return(
        <UserInfoContext.Provider value={{user, dataService, userDB}}>
            {props.children}
        </UserInfoContext.Provider>
    )
})