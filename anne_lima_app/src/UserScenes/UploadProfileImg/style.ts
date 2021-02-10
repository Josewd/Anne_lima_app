import { ImageStyle, StyleProp, StyleSheet, ViewStyle } from 'react-native'

type loginStyle = {
    containerAbsolute: ViewStyle;
    title: ViewStyle;
    subTitle: ViewStyle;
    backgroundImage: ViewStyle;
    labelError:ViewStyle;
    container: ViewStyle;
    profileImage: StyleProp<ImageStyle>
    logoPicture:StyleProp<ImageStyle>
}

export const style : StyleSheet.NamedStyles<loginStyle> = {
    logoPicture:{width: 90, height:40, marginBottom: -30, marginTop: 50},
    profileImage:{
        width: 90, 
        height:90, 
        borderRadius: 90, 
        margin:5
    },
    container:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage:{
        width: '100%',
        height:'100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
      },
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
      color: '#000'
    },
    labelError: {
      color: '#f00',
    },
    subTitle:{
      marginBottom: 50,
      color: 'grey',
      fontSize: 18
    }
  }

 