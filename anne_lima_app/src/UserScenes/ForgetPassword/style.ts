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
    logoTitle:ViewStyle;
    logoContainer: ViewStyle;
}

export const style : StyleSheet.NamedStyles<loginStyle> = {
    appbar:{
        backgroundColor: '#fff',
        height: 70
    },
    logoContainer:{
      flexDirection:'row',
      width: '60%',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
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
    logoTitle:{
      margin: 5,
      fontSize: 15,
      color: '#000',
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

  