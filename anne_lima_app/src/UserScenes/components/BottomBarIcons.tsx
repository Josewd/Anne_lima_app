import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/FontAwesome';

type AppBarProps = {
    homeChange?: ()=>void
    historyChange?: ()=>void
    appointmentChange?: ()=>void
    profileChange?: ()=>void
}

export const BottomBar:FunctionComponent<AppBarProps> = (props)=> {

  return (
    <View style={ style.appBar}>
        <TouchableOpacity onPress={props.homeChange}>
           <Icon name='home' size={30} color='#eb42b8'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.appointmentChange}>
           <Icon name='calendar-check-o' size={30} color='#eb42b8'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.historyChange}>
            <Icon name='history' size={30} color='#eb42b8'/>
        </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'transparent',
        borderTopWidth: 0.7,
        borderTopColor: 'grey'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'

    }
})
