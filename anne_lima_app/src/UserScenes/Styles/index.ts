import { ImageStyle, StyleSheet, ViewStyle } from 'react-native'

type loginStyle = {
    containerAbsolute: ViewStyle;
    title: ViewStyle;
    logoTitle: ViewStyle;
    subTitle: ViewStyle;
    backgroundImage: ViewStyle;
    labelError:ViewStyle;
    logo: ImageStyle
}

export const style : StyleSheet.NamedStyles<loginStyle> = {
    containerAbsolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '65%',
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
      color: '#000',
    },
    logoTitle:{
      margin: 5,
      fontSize: 15,
      color: '#000',
    },
    labelError: {
      color: '#f00',
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18,
      fontFamily: 'NirvanaRegular'
    },
    backgroundImage:{
      width: '100%',
      height:'100%',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
    },
    logo:{
      width: 90, 
      height:40, 
      marginBottom: -25,
      marginTop: 50
    }
  }

 