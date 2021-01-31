import { StyleSheet, ViewStyle } from 'react-native'

type loginStyle = {
    containerAbsolute: ViewStyle;
    title: ViewStyle;
    subTitle: ViewStyle;
    labelError:ViewStyle;
    appbar: ViewStyle;
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
      marginTop: -120,
      fontWeight:'bold',
      fontSize: 35,
      color: '#000'
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
    }
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
      marginTop: -120,
      fontWeight:'bold',
      fontSize: 35,
      color: '#fff'
    },
    labelError: {
      color: '#f00',
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18,
      textAlign: 'center'
    }
  }
  