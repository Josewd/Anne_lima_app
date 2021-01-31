import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


type inputProps = {
    text: string;
    boldText?: string;
    onClick: ()=>void;
    isDark?: boolean
}

export const ButtonLink: FunctionComponent<inputProps> = (props)=> {
  return (
    <TouchableOpacity onPress={props.onClick} style={style.button}>
            <Text style={props.isDark? darkStyle.text :style.text}>{props.text} </Text>
            <Text style={props.isDark? darkStyle.boldText :style.boldText}>{props.boldText} </Text>
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
  const darkStyle = StyleSheet.create({
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
     fontSize: 15,
     color: '#fff'
    },
    boldText:{
     fontSize: 15,
     fontWeight: 'bold',
     color: '#eb1b83'
    }
   })