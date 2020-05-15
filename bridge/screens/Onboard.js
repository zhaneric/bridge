import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    stretch: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined,
        alignItems: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FF9987',
        width: '80%',
        height: '7%',
        bottom: '15%',
        borderRadius: 50,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    }
});

export default class Onboard extends React.Component{
    render(){
        return(
            <View style={styles.fill}>
                <ImageBackground
                    source={require('../assets/Onboard.png')}
                    style={styles.stretch}
                >
                    <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.text}>GET STARTED</Text>
                    </TouchableOpacity> 
                </ImageBackground>
            </View>
        );
    }
}