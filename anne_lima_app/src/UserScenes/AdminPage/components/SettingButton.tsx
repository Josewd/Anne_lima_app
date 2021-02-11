import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type buttonProps ={
  onClick?:()=>void;
}

export const SettingButton: FunctionComponent<buttonProps> = (props)=> {
  return (
    <TouchableOpacity
      style={style.button}
       onPress={props.onClick}>
      <View style={style.borderContainer}>
        <Image
          style={style.logo} 
          source={require('../../../assets/img/brushLogo.png')} />
        <Text style={style.text}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  button:{
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
    position: 'relative',
    overflow: 'visible'
   
  },
  borderContainer:{
    width: 85,
    height: 85,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  logo:{
    position: 'absolute',
    top: 5,
    right: -16,
    width: 110,
    height: 45,
  },
  text:{
    textTransform:'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 30,
    marginLeft: 5,
    fontSize: 12
  }
})
