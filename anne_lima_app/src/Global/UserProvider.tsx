import React, { FunctionComponent, useEffect, useState } from 'react';
import { UserInfoContext } from '../contexts/UserContext/'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage'
import database from '@react-native-firebase/database'
import { userDb } from '../UserScenes/UserProfile/types';
export type UserInterface = {
        id:string,
        name:string,
        birthday:string,
        email:string,
        phone_number:string,
        role: string,
        avatar: string;
    }


export const UserProvider: FunctionComponent = (props)=>{
    const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({} as FirebaseAuthTypes.User);
  const [userDB, setUserDB]= useState({} as userDb)

  // Handle user state changes
  async function onAuthStateChanged (user: any) {
    setUser(user)
    if (initializing) setInitializing(false);
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
      console.log(userDB)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [user]);
 
    return(
        <UserInfoContext.Provider value={{user, setUser, userDB}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}