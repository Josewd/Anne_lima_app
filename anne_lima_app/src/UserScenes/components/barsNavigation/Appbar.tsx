import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

type AppBarProps = {
    text: string;
    image: object;
    onClick?: ()=>void
}

export const Appbar:FunctionComponent<AppBarProps> = (props)=> {
  return (
    <SafeAreaView style={ style.appBar}>
        <TouchableOpacity onPress={props.onClick} style={{marginHorizontal: 10, justifyContent:'flex-end'}}>
        <Avatar.Image key={props.text} size={50} source={props.image}/>
        </TouchableOpacity>
        <Text style={style.text}>{props.text}</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        zIndex:1,
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingBottom: 10,
        backgroundColor: 'transparent'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'

    }
})
