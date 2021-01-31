import { StyleSheet, ViewStyle } from 'react-native'

type loginStyle = {
    containerAbsolute: ViewStyle;
    title: ViewStyle;
    subTitle: ViewStyle;
    backgroundImage: ViewStyle;
    labelError:ViewStyle;
}

export const style : StyleSheet.NamedStyles<loginStyle> = {
    containerAbsolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '55%',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      opacity: 0.89
    },
    title:{
      marginTop: 20,
      fontWeight:'bold',
      fontSize: 35,
      color: '#000'
    },
    labelError: {
      color: '#f00',
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18
    },
    backgroundImage:{width: '100%', height:'100%'}
  }

  export const darkStyle : StyleSheet.NamedStyles<loginStyle> = {
    containerAbsolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '55%',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      alignItems: 'center',
      backgroundColor: '#030013',
      justifyContent: 'flex-start',
      opacity: 0.89
    },
    title:{
      marginTop: 20,
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
      fontSize: 18
    },
    backgroundImage:{width: '100%', height:'100%'}
  }
  