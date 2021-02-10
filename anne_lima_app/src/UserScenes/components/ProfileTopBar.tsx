import React, { FunctionComponent } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/Ionicons';

type profileProps={
    avatar: {uri: ''};
    onClick?: ()=>void;
    onClickAvatar?: ()=>void
}

export const ProfileTopBar: FunctionComponent<profileProps> = (props)=> {
  return (
        <ImageBackground 
          style={style.Image} 
          source={require('../../assets/img/profilePage.jpg')}>
              <TouchableOpacity style={style.icon} onPress={props.onClick}>
                    <Icon size={30} color='#fff' name='arrow-back'/>
              </TouchableOpacity>
              <View style={style.avatar} >
                <TouchableOpacity  onPress={props.onClickAvatar} >
                <Avatar.Image 
                    size={100} 
                    source={props.avatar}
                    />
                </TouchableOpacity>
              </View>
        </ImageBackground>
  );
}


const style = StyleSheet.create({
    Image:{
        width: '100%',
        height: 150,
        position: 'relative'
    },
    avatar:{
        position: 'absolute',
        bottom: -55,
        left: '38%',
        width: 105,
        height: 105,
        borderRadius: 105,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#eb42b8'
    },
    icon:{
      marginLeft: 20,
      marginTop: 30
    }
})