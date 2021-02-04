import React, { FunctionComponent, useState } from 'react';
import { UserInfoContext } from '../contexts/UserContext/'

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
    const [userState, setUserState] = useState({}as UserInterface)
 
    return(
        <UserInfoContext.Provider value={{userState, setUserState}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}