import React, { FunctionComponent, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import storage from '@react-native-firebase/storage'


type cardPros = {
    title: string;
    description?: string;
    price: number;
    duration: string;
    image: string;
    button: string;
    onClick?:()=>void
}

export const  ServiceCard: FunctionComponent<cardPros>= (props) =>{
    const [url, setUrl] = useState('error')
    useEffect(()=>{
        storage().ref(`services/${props.image}`)
        .getDownloadURL().then(data=>{
            setUrl(data)
        }).catch(err=>{
            setUrl('error')
        })
    })
  
 return (
    <View style={style.card}>
        <Image style={style.image} source={{uri: url}} />
        <View style={style.viewInfo}>
            <View style={style.viewTitle}>
                <Text style={style.title}>{props.title}</Text>
                <Text style={style.titleInfo}>{props.duration}</Text>
            </View>
            <View style={style.viewButton}>
                <Text style={style.price}>{props.price.toFixed(2).replace('', 'EUR ').replace('.', ',')}</Text>
                <TouchableOpacity
                     style={style.button}
                     onPress={props.onClick}
                     ><Text style={style.buttonText}>{props.button}</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    card:{
        width: '95%',
        height: 80,
        flexDirection: 'row',
        margin: 5,
        borderBottomWidth: 0.2,
        borderBottomColor: 'grey'

    },
    image:{
        height: 70,
        width: 70,
        margin: 5,
        borderRadius: 10
    },
    viewInfo:{
        width: 260,
        justifyContent:'space-between',
        padding: 5
    },
    viewTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 15,
    },
    titleInfo:{
        color: 'grey',
        fontSize: 12
    },
    viewDescription:{

    },
    description:{
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10,
    },
    viewButton:{
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price:{
        color: '#eb42b8',
        alignSelf:'flex-end'
    },
    button:{
        width: 70,
        height: 25,
        borderRadius: 20,
        backgroundColor:'#eb42b8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontWeight: 'bold',
        color: '#fff'
    }

})
