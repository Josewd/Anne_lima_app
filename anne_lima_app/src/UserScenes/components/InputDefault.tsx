import React, { FunctionComponent } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

type inputProps = {
    onClick?: ()=>void;
    icon: string;
    iconEye?: boolean
    placeholder?: string
    secureTextEntry: boolean;
    onChangeText?: (text:string)=>void;
    value: string;

}

export const InputDefault: FunctionComponent<inputProps> = (props)=> {
  return (
    <View style={style.inputContainer}>
        <View style={style.iconContainer}>
        <Icon name={props.icon} size={20} color='#eb42b8' />
        </View>
    
        <TextInput
          style={style.input}
          value={props.value}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
        />
        {props.iconEye && <TouchableOpacity style={style.touchIconContainer} onPress={props.onClick}>
                    <Icon name={props.secureTextEntry? 'eye' : 'eye-with-line'} size={20} color='#000'  />
            </TouchableOpacity>}
        </View>
  );
}

const style = StyleSheet.create({
    inputContainer: {
      width: '75%',
      backgroundColor: '#e6e6e6',
      borderRadius: 30,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'space-between',
      margin: 5
    },
    iconContainer:{
        width: 50,
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: 30
    },
    touchIconContainer:{
        width: 50,
        justifyContent:'center',
        alignItems: 'center',
        height: '100%',
        alignSelf: 'flex-end',
        borderRadius: 30
    },
    input: {
      flexGrow: 1
    }
  })
  