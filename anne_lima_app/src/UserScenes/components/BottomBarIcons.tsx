import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/FontAwesome';

type AppBarProps = {
    homeChange?: ()=>void
    historyChange?: ()=>void
    appointmentChange?: ()=>void
    settingChange?: ()=>void
    profileChange?: ()=>void
}

export const BottomBar:FunctionComponent<AppBarProps> = (props)=> {
    const [buttons, setButtons] = useState({home: 'grey', calendar: 'grey', history: 'grey', settings: 'grey'})

  return (
    <View style={ style.appBar}>
        <TouchableOpacity onPress={props.homeChange}>
           <Icon name='home' size={30} color={buttons.home} onPress={()=>{
               setButtons({home: '#eb42b8', calendar: 'grey' , history: 'grey', settings: 'grey'})
            }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.appointmentChange}>
           <Icon name='calendar-check-o' size={30} color={buttons.calendar}onPress={()=>{
               setButtons({home: 'grey', calendar: '#eb42b8', history: 'grey', settings: 'grey'})
            }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.historyChange}>
            <Icon name='history' size={30} color={buttons.history} onPress={()=>{
               setButtons({home: 'grey', calendar: 'grey', history: '#eb42b8',  settings: 'grey'})
            }}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.settingChange}>
            <Icon name='gears' size={30} color={buttons.settings} onPress={()=>{
               setButtons({home: 'grey', calendar: 'grey', history: 'grey', settings: '#eb42b8'})
            }}/>
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
        backgroundColor: '#fff',
        borderTopWidth: 0.7,
        borderTopColor: 'grey',

    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'

    }
})
