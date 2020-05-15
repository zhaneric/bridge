import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import images from '../assets/Images';


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FF9987',
        alignItems: 'stretch',
        padding: 16
        //justifyContent: 'center',
    },
    header: {
        color: 'white',
        fontSize: 24,
        marginTop: '16%',
        marginBottom: '8%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    textContainer: {
        alignItems: 'center',
        width: '96%'
    }

});

export default class WhyUnwell extends React.Component{
    render(){
        return(
            <View style={styles.screen}>
                <XBar>
                    <XButton image={images.icons.x} onPress={() => {}} style = {{marginBottom: 0}}/> 
                </XBar>
                <View style = {styles.textContainer}>
                    <Text style = {styles.header}> So sorry to hear that, please select what you are experiencing.</Text>
                </View>        
                <Button image={images.icons.feelingIll} title={'Feeling ill'} onPress={() => this.props.navigation.navigate('Symptoms')}/>  
                <Button image={images.icons.physicalPain} title={'Physical pain'} onPress={() => {}} style = {{marginTop: 12}}/>  
                <Button image={images.icons.feelingDown} title={'Feeling Down'} onPress={() => {}} style = {{marginTop: 12}}/>
                <OtherButton title={'Other'} onPress={() => {}} style = {{marginTop: 12}}/>  
            </View>
        );
    }
}



const XBar = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 48px;
    padding-right: 16px;
    align-items: stretch;
`
const Button = ({image, onPress, title, style}) => {
    return (
        <Container onPress={onPress} style={style}>
            <Icon source={image} resizeMode='center'/>
            <Title>{title}</Title>
        </Container>
    )
}

const OtherContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: 70px;
    background-color: white;
    border-radius: 28px;
    align-items: center;
    justify-content: center;
`

const OtherButton = ({onPress, title, style}) => {
    return (
        <OtherContainer onPress={onPress} style={style}>
            <Title>{title}</Title>
        </OtherContainer>
    )
}

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

const Container = styled.TouchableOpacity`
    flex-direction: row;
    height: 128px;
    background-color: white;
    border-radius: 22px;
    align-items: center;
    padding: 28px;
`

const Title = styled.Text`
    color: #FF9987;
    font-size: 24px;
`

const Icon = styled.Image`
    width: 85px;
    height: 85px;
    margin-right: 60px; 
`

