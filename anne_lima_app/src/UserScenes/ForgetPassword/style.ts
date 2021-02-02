import { StyleSheet, ViewStyle } from 'react-native'

type loginStyle = {
    containerAbsolute: ViewStyle;
    title: ViewStyle;
    subTitle: ViewStyle;
    labelError:ViewStyle;
    appbar: ViewStyle;
    dialogContainer: ViewStyle;
    dialogTitle: ViewStyle;
    dialogSubTitle: ViewStyle;
    dialogButton: ViewStyle;
}

export const style : StyleSheet.NamedStyles<loginStyle> = {
    appbar:{
        backgroundColor: '#fff',
        height: 70
    },
    containerAbsolute: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'center',
      opacity: 0.89
    },
    title:{
      marginTop: 200,
      fontWeight:'bold',
      fontSize: 35,
      color: '#000'
    },
    dialogTitle:{
      fontWeight:'bold',
      fontSize: 35,
      color: '#000',
      textAlign:'center'
    },
    dialogSubTitle:{
      marginBottom: 20,
      color: 'grey',
      fontSize: 18,
      textAlign: 'center'
    },
    dialogButton:{
      marginTop: -100,
    },
    labelError: {
      color: '#f00',
      marginBottom: -30,
      marginTop: -10
      
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18,
      textAlign: 'center'
    },
    dialogContainer: {
    height: 320,
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  }

  export const darkStyle : StyleSheet.NamedStyles<loginStyle> = {
    appbar:{
        backgroundColor: '#0f0c24',
        opacity: 0.89,
        height: 70
    },
    containerAbsolute: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#030013',
      justifyContent: 'center',
      opacity: 0.89
    },
    title:{
      marginTop: 200,
      fontWeight:'bold',
      fontSize: 35,
      color: '#fff'
    },
    dialogTitle:{
      fontWeight:'bold',
      fontSize: 35,
      color: '#fff',
      textAlign: 'center',
      marginBottom: 20,
    },
    dialogSubTitle:{
      marginBottom: 10,
      color: 'grey',
      fontSize: 18,
      textAlign: 'center'
    },
    dialogButton:{
      marginTop: -100,
    },
    labelError: {
      color: '#f00',
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18,
      textAlign: 'center'
    },
    dialogContainer: {
      height: 320,
      width: '90%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: '#0e0835',
      borderRadius: 20,
      opacity: 1
    },
  }
  