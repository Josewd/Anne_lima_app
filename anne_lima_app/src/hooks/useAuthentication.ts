import { getTokenData } from "../constant";

export function useAuthentication (){
   const token  = getTokenData().then(data=> data)
   .catch(err=> false)
    if(!token){
        return false
    }else{
        return true
    }
}