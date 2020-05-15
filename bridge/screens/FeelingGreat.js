import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import images from '../assets/Images';


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FF9987',
        alignItems: 'center',
    },
    header: {
        color: 'white',
        fontSize: 28,
        marginTop: 346,
        alignSelf: 'center'
    }

});

export default class FeelingGreat extends React.Component{
    render(){
        return(
            <View style={styles.screen}>
                <XBar>
                    <XButton image={images.icons.x} onPress={() => {}} style = {{marginBottom: 0}}/> 
                </XBar>
                <Text style = {styles.header}>Glad you are feeling great!</Text>
            </View>
        );
    }
}



const XBar = styled.View`
    width: 84%;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 66px;
`


const XButton = ({image, onPress, style}) => {
    return (
        <XContainer onPress={onPress} style={style}>
            <XIcon source={image} resizeMode='center'/>
        </XContainer>
    )
}

const XIcon = styled.Image`
    width: 25px;
    height: 25px;
`

const XContainer = styled.TouchableOpacity`
    height: 25px; 
    width: 25px; 
`




