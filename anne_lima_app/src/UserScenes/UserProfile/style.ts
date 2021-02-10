import { StyleSheet, ViewStyle } from "react-native";

type stylesProps = {
    buttonContainer: ViewStyle;
    userInfoContainer: ViewStyle;
    name: ViewStyle;
}


export const style :StyleSheet.NamedStyles<stylesProps> = {
    buttonContainer:{
        position: 'absolute',
        bottom:80,
        left: 0,
        width: '100%',
        alignItems: 'flex-end'
    },
    userInfoContainer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    name:{
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        fontStyle: 'italic',
        marginBottom: 15
    }
}
