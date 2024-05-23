import auth from '@react-native-firebase/auth'
import { useEffect, useState } from 'react'


export const useAuth = () => {
    const [state, setState] = useState(() => {
         const user = auth().currentUser 
         return { initializing: !user, user, } 
        })
    function onChange(user: any) {
      setState({ initializing: false, user })
    }
    //comment to makes changes
    /// new changes
  
    useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged(onChange)
      return () => unsubscribe()
    }, [])
  
    return state
  }
