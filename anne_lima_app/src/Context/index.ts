import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createContext }from 'react';
import { service } from '../UserScenes/MainPage/types';
import { userDb } from '../UserScenes/UserProfile/types';

type contextProps = {
    user: any;
    userDB: userDb
   dataService: any
}

export const UserInfoContext = createContext<Partial<contextProps>>({});

// adding comments
