import { createContext }from 'react';
import { UserInterface } from '../../Global/UserProvider';

type contextProps = {
    userState : UserInterface;
    setUserState: React.Dispatch<React.SetStateAction<UserInterface>>
}

export const UserInfoContext = createContext<Partial<contextProps>>({});

const darkColor: string = '#030013'