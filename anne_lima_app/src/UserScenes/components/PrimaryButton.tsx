import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type inputProps = {
    text: string;
    onClick: ()=>void
}

export const PrimaryButton: FunctionComponent<inputProps> = (props)=> {
  return (
    <TouchableOpacity onPress={props.onClick} style={style.button}>
        <Text style={style.text}>
            {props.text}
        </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
   button:{
    width: '75%',
    backgroundColor: '#eb1b83',
    borderRadius: 30,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 30
   },
   text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
   }
  })
  