import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Navigation } from 'react-native-navigation';

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    stretch: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'cover',
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '5%',
        marginBottom: '12%',
    },
    button: {
        backgroundColor: '#FF9987',
        width: '84%',
        height: '7%',
        borderRadius: 50,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 34,
        fontWeight: '600',
        color: '#FF9987'
    },
    description: {
        margin: "4%",
        marginBottom: "8%",
        fontSize: 18,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        
    }
});

export default class Welcome extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.fill}>
                <ImageBackground
                    source={require('../assets/WelcomeIcon.png')}
                    style={styles.stretch}
                >
                    <View style={styles.content}>
                        <Text style={styles.heading}>Welcome Alison</Text>
                        <Text style={styles.description}>Bridge connects you to your support network, 
                            allowing your loved ones to check in with how you are doing and 
                            to set up reminders for your daily needs.
                        </Text>
                        <TouchableOpacity
                            onPress={(e) => this.props.navigation.navigate('CheckIn')}
                            style={styles.button}>
                                <Text style={styles.text}>LET'S DO THIS</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}