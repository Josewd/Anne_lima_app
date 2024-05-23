import {v4} from "uuid";
import { service } from "../UserScenes/MainPage/types";

export function generateId(): string{
    return v4();
}

export const validateEmail = (email:string) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  export const createArrayService = (
    data:any, 
    arrayServices: service[], 
    setArrayServices: (array: service[])=>void
    )=>{
    const keys = Object.keys(data)
    const uniqueKeys = keys.filter((key, idx, ar)=> ar.indexOf(key)=== idx)
    uniqueKeys.forEach((key)=>{
        const obj: service = {
            id: key,
            title: data[key].title,
            description: data[key]?.description,
            price: data[key].price,
            duration: data[key].duration,
            durationTime: data[key].durationTime,
            available: data[key].available
        }
        const array = arrayServices
        array.push(obj)
        
        setArrayServices(array)
    })
}

export const uniqueArray = (keys: string[])=>{
    const array = keys.filter((key, idx, ar)=> ar.indexOf(key)=== idx)
    return array
}

// new constant
