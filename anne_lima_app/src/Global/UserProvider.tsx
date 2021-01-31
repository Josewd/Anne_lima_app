import React, { FunctionComponent, useState } from 'react';
import { UserInfoContext } from '../contexts/UserContext/'

export type UserInterface = {
        id:string,
        name:string,
        birthday:string,
        email:string,
        phone:string,
    }

export const UserProvider: FunctionComponent = (props)=>{
    const [userState, setUserState] = useState({}as UserInterface)
    const [isDark, setIsDark] = useState(false)
 
    return(
        <UserInfoContext.Provider value={{userState, setUserState, isDark, setIsDark}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}