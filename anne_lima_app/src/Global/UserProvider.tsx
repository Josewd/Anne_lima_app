import React, { FunctionComponent, useEffect, useState } from 'react';
import { UserInfoContext } from '../contexts/UserContext/'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
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

  // Handle user state changes
  function onAuthStateChanged(user: any) {

    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [user]);
 
    return(
        <UserInfoContext.Provider value={{user, setUser}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}