import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

type ScrollProps = {
   text: string;
   onClick?: ()=>void;
   name:string;
}

export const AvatarText:FunctionComponent<ScrollProps> = (props)=> {

  return (
    <View style={style.container}>
    <TouchableOpacity onPress={props.onClick} style={style.touchable}>
       <Avatar.Text size={60} label={props.text}/>
       </TouchableOpacity>
       <Text style={style.text}>{props.name}</Text>
      </View>
  );
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 70,
        borderColor: '#eb42b8',
        borderWidth: 2,
        marginHorizontal:5,
    },
    text:{
        fontSize: 12,
        color: '#000'
    },
    
})

