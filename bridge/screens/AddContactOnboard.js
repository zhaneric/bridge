import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, Image, TextInput, Animated} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class AddContactOnboard extends React.Component{
    constructor(props)
    {
      super(props);

      this.state = {
        phone: '',
      };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style = {{height: 100, width: 100, backgroundColor: '#FFFFFF', borderRadius: 50, top: '10%', justifyContent:'center', alignItems:'center'}}>
                  <Image style = {{height: 70, width: 35}} source={require('../assets/smallLogo.png')}/>
                </View>
                <View style = {{width: '88%', top: '15%'}}>
                  <Text style = {{fontSize: 22, color:'#FFFFFF'}}>Add people you care about to your network</Text>
                </View>
                <View style = {{width: '90%', top: '18%'}}>
                  <Text style = {{color: '#FFFFFF', alignSelf: 'left', fontSize: 16}}>  Enter their phone number:</Text>
                  <TextInput style = {styles.textInput} clearButtonMode="while-editing" autoCapitalize='none' onChangeText={text => this.phone(text)} value = {this.state.phone}/>
                  <TouchableOpacity style = {{marginTop: 20, flexDirection: 'row', alignItems: 'center', marginLeft: '75%'}}
                    onPress = {()=>{this.props.navigation.navigate('Welcome')}}
                  >
                    <Text style = {{color: '#FFFFFF', fontSize: 17}}> NEXT </Text>
                    <Image style={{height: 12, width:16, transform: [{rotate:'180deg'}]}} source={require('../assets/backArrow.png')}/>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style = {{position:'absolute', bottom: '10%', alignSelf:'center'}}
                  onPress = {()=>{this.props.navigation.navigate('Welcome')}}
                >
                  <Text style = {{color: '#FFFFFF', fontSize: 19}}> SKIP </Text>
                </TouchableOpacity>
            </View>
        );
    };

    phone(number){
      this.setState({phone: number});
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF9987',
        alignItems: 'center'
    },
    textInput: {
        width: '100%',
        height: 45,
        marginTop: 4,
        paddingLeft: 15,
        backgroundColor: '#FFEBE7',
        borderRadius: 22,
    },
});
