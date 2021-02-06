import { StyleSheet, ViewStyle } from 'react-native'

export const style = StyleSheet.create({
    backgroundDark:{
        backgroundColor: '#030013',
        opacity: 0.89,
        flexGrow: 1
    },
    background: {
        flexGrow:1
    },
    containerTop:{
        height: 320, 
        alignItems:'center', 
    },
    serchBar: {
        width:'80%', 
        marginBottom: 95, 
        marginRight:5, 
        height:40, 
        opacity: 0.8,
        borderRadius:15,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold', 
        color: '#fff', 
        fontSize: 18,
        marginBottom: 10 
    },
    bkImage:{
        width: '100%', 
        height: '100%' ,
        alignItems:'center', 
        justifyContent:'flex-end'
    }
})