import { StyleSheet } from 'react-native'
import {style as baseStyle} from '../Styles'

export const style = StyleSheet.create({...baseStyle,
    switchContainer: {
        width:'70%',
        alignItems:'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        margin: 10
    },
    switchLabel: {
        fontSize: 14,
        fontWeight:'bold'
    },
    profileImage:{
        width: 90, 
        height:90, 
        borderRadius: 10, 
        margin:5
    },
})