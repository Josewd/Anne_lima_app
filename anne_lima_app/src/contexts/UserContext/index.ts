import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createContext }from 'react';
import { userDb } from '../../UserScenes/UserProfile/types';

type contextProps = {
    user: any;
    userDB: userDb
    setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>
}

export const UserInfoContext = createContext<Partial<contextProps>>({});

const darkColor: string = '#030013'