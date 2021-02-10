import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createContext }from 'react';

type contextProps = {
    user: any
    setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>
}

export const UserInfoContext = createContext<Partial<contextProps>>({});

const darkColor: string = '#030013'