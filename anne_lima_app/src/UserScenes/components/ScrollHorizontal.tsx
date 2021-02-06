import React, { FunctionComponent }from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

type ScrollProps = {
    title: string;
}

export const ScrollHorizontal:FunctionComponent<ScrollProps> = (props)=> {
    

  return (
      <View style={style.container}>
        <Text style={style.text}>{props.title}</Text>
        <ScrollView 
        horizontal 
        alwaysBounceHorizontal 
        style={style.scroll}>
            {props.children}
        </ScrollView>
      </View>
  );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: -40,
        marginBottom: 60
    },
    scroll: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'transparent'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000',
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10
    }
})
