import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, Image, TextInput} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class Login extends React.Component{
    constructor(props)
    {
      super(props);

      this.state = {
        phone: '',
        password: ''

      };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style ={{flexDirection: 'row', top: screenHeight*0.07, alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress = {()=>{this.props.navigation.navigate('Onboard')}}>
                        <Image style={{height: 20, width:20, marginLeft: screenWidth*0.05,}} source={require('../assets/backArrow.png')}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:'31%', fontSize: 20, color:'#FFFFFF'}}>Sign in</Text>
                </View>
                <View style = {{marginTop: 90, backgroundColor: '#FFFFFF', height: '100%', borderRadius: 40}}>
                  <View style = {{marginTop: 80, width: '92%', alignSelf: 'center'}}>
                    <Text style = {{color: '#777777'}}>  Phone number:</Text>
                    <TextInput style = {styles.textInput} clearButtonMode="while-editing" autoCapitalize='none' onChangeText={text => this.phone(text)} value = {this.state.phone}/>
                    <Text style = {{marginTop: 20, color: '#777777'}}>  Password:</Text>
                    <TextInput style = {styles.textInput} secureTextEntry={true} clearButtonMode="while-editing" autoCapitalize='none' onChangeText={text => this.password(text)} value = {this.state.password}/>
                    <TouchableOpacity style = {{marginTop: 20}}>
                      <Text style = {{color: '#E58A79'}}>  Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.button} onPress = {()=>{this.props.navigation.navigate('AddContactOnboard')}}>
                    <Text style={styles.text}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    };

    phone(number){
      this.setState({phone: number});
    }
    password(pass){
      this.setState({password: pass});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9987'
    },
    textInput: {
        width: '100%',
        height: 45,
        marginTop: 2,
        paddingLeft: 15,
        backgroundColor: '#FFEBE7',
        borderRadius: 22,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FF9987',
        width: '90%',
        height: '7%',
        bottom: '10%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400'
    }
});
