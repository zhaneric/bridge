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
    }, 
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }

});

export default class Symptoms extends React.Component{
    state = {
        symptomSelected: false,
       
    }

    handleCheckBox = (id) => {
        this.setState({ symptomSelected: !this.state.symptomSelected })
        console.log(id)
    }

    render(){
     
        return(
            <View style={styles.screen}>
                <XBar>
                    <XButton image={images.icons.x} onPress={() => {}} style = {{marginBottom: 0}}/> 
                </XBar>
                <View style = {styles.textContainer}>
                    <Text style = {styles.header}> Are you feeling any of these symptoms?</Text>
                </View> 
                
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(1)}  title={'Constipation'}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(2)}  title={'Diarrhea'} style = {{marginTop: 2}}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(3)} title={'Difficulty Breathing'} style = {{marginTop: 2}}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(3)} title={'Muscle/Joint Pain'} style = {{marginTop: 2}}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(3)} title={'Stomach Ache'} style = {{marginTop: 2}}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(3)} title={'Fever'} style = {{marginTop: 2}}/>  
                <Row image={this.state.symptomSelected ? images.icons.check : images.icons.uncheck} onPress={() => this.handleCheckBox(3)} title={'Nausea'} style = {{marginTop: 2}}/>  

                <CompleteButton style = {{marginTop: 24}} onPress={() => this.props.navigation.navigate('ContactsNotified')}/>
            </View>
        );
    }
}



const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props}) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={ selected ? images.icons.check : images.icons.uncheck}
        />
        <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
)

const CheckBoxButton = ({image, onPress, style}) => {
    return (
        <CheckBoxContainer onPress={onPress} style={style}>
            <CheckBoxIcon source={image} resizeMode='center'/>
        </CheckBoxContainer>
    )
}

const CheckBoxIcon = styled.Image`
    width: 36px;
    height: 36px;
`

const CheckBoxContainer = styled.TouchableOpacity`
    height: 36px; 
    width: 36px; 
    margin-horizontal: 12px;
`
const Row = ({image, title, onPress, style}) => {
    return (
        <Container style={style}>
            <CheckBoxButton image={image} onPress={onPress} resizeMode='center'/>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    height: 60px;
    align-items: center;
`

const Title = styled.Text`
    color: white;
    font-size: 20px;
`

const Icon = styled.Image`
    width: 36px;
    height: 36px;
    margin-horizontal: 16px;
`


const CompleteContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: 60px;
    background-color: white;
    border-radius: 28px;
    align-items: center;
    justify-content: center;
    margin-horizontal: 12px;
`

const CompleteButton = ({onPress, style}) => {
    return (
        <CompleteContainer onPress={onPress} style={style}>
            <Text style={{fontSize: 20, color: '#FF9987'}}> Complete </Text>
        </CompleteContainer>
    )
}

const XBar = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 48px;
    padding-right: 16px;
    align-items: stretch;
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

