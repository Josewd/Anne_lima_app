import React from 'react';
import { useAsyncStorage } from "@react-native-community/async-storage";

export const tokenData = useAsyncStorage('token')
export const userData = useAsyncStorage('user')

export const validateEmail = (email:string) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };