import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type inputProps = {
    text: string;
    boldText?: string;
    onClick: ()=>void;
}

export const ButtonLink: FunctionComponent<inputProps> = (props)=> {
  return (
    <TouchableOpacity onPress={props.onClick} style={style.button}>
            <Text style={style.text}>{props.text} </Text>
            <Text style={style.boldText}>{props.boldText} </Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
   button:{
    marginTop: 5,
    width: '75%',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
   },
   text:{
    fontSize: 15,
    color: '#000'
   },
   boldText:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eb1b83'
   }
  })