import React, { FunctionComponent } from 'react';
import { View, StyleSheet} from 'react-native'
import TextInputMask from 'react-native-text-input-mask';
import Icon  from 'react-native-vector-icons/Entypo';

type TextInputMaskProps = {
    icon: string;
    placeholder?: string
    onChangeText: (text:string)=>void;
    value: string;
};

export const DateInput: FunctionComponent<TextInputMaskProps> = (props) => {
  const DateMask = '[00]/[00]/[0000]';
 
  return (

    <View style={style.inputContainer}>
    <View style={style.iconContainer}>
    <Icon name={props.icon} size={20} color='#eb42b8' />
    </View>

    <TextInputMask
      value={props.value}
      placeholder={props.placeholder}
      style={style.input}
      keyboardType={'numeric'}
      mask={DateMask}
      onChangeText={props.onChangeText}
    />
    </View>
   
  );
};

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
      flexGrow: 1,
      textAlign: 'right',
      paddingRight: 30
    }
  })