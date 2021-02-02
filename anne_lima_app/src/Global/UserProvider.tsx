import React, { FunctionComponent, useEffect, useState } from 'react';
import { getData } from '../constant';
import { UserInfoContext } from '../contexts/UserContext/'

export type UserInterface = {
        id:string,
        name:string,
        birthday:string,
        email:string,
        phone:string,
        role: string
    }

export const UserProvider: FunctionComponent = (props)=>{
    const [userState, setUserState] = useState({}as UserInterface)
    const [isDark, setIsDark] = useState(false)

    useEffect(()=>{
        if(getData('user')){
            const user = getData('user')
            setUserState({
                id: user.id,
                name: user.name,
                birthday: user.birthday,
                email: user.email,
                phone: user.phone_number,
                role: user.role
            })
        }
    },[])

 
    return(
        <UserInfoContext.Provider value={{userState, setUserState, isDark, setIsDark}}>
            {props.children}
        </UserInfoContext.Provider>
    )
}