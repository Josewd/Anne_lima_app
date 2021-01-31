import { useState } from 'react'
import { anne_api } from '../services/anne_api'


export const useRequestData = (url:string, token: string)=>{
    const [data,  setData] = useState(undefined)
      anne_api.get(url, {
          headers:{
              authorization: token
          }
      }).then(res=>{
          setData(res.data)
      }).catch(err=>{
          console.log(err)
      })
    
    return data
}