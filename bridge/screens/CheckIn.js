import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import images from '../assets/Images';


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FF9987',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'white',
        fontSize: 28,
        marginBottom: '8%',
        alignSelf: 'center'
    },

    buttons: {
        alignSelf: 'stretch',
        marginHorizontal: 15
    }
});

export default class CheckIn extends React.Component {
    render() {
        return (
            <View style={styles.screen}>
                <XBar>
                    <XButton image={images.icons.x} onPress={() => { }} style={{ marginBottom: 0 }} />
                </XBar>
                <View style={{ width: '100%', flex: 3 }}>
                    <Text style={styles.header}> How are you feeling today?</Text>
                    <View style={styles.buttons}>
                        <ButtonRow>
                            <Button image={images.icons.great} title={'Great!'} onPress={() => this.props.navigation.navigate('FeelingGreat')} />
                            <Button image={images.icons.good} title={'Good'} onPress={() => { }} style={{ marginLeft: 10 }} />
                        </ButtonRow>
                        <SecondButtonRow>
                            <Button image={images.icons.fine} title={'Fine'} onPress={() => { }} />
                            <Button image={images.icons.unwell} title={'Unwell'} onPress={() => this.props.navigation.navigate('WhyUnwell')} style={{ marginLeft: 10 }} />
                        </SecondButtonRow>
                    </View>
                </View>

            </View>
        );
    }
}

const ButtonRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
`

const SecondButtonRow = styled(ButtonRow)`
    margin-top: 10px;
`

const XBar = styled.View`
    flex: 1
    width: 84%;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 66px;
`
const Button = ({ image, onPress, title, style }) => {
    return (
        <Container onPress={onPress} style={style}>
            <Icon source={image} resizeMode='center' />
            <Title>{title}</Title>
        </Container>
    )
}

const XButton = ({ image, onPress, style }) => {
    return (
        <XContainer onPress={onPress} style={style}>
            <XIcon source={image} resizeMode='center' />
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
    flex: 1;
    height: 182px;
    background-color: white;
    border-radius: 22px;
    align-items: center;
    padding: 15px;
`

const Title = styled.Text`
    color: #FF9987;
    margin-top: 12px;
    font-size: 22px;
`

const Icon = styled.Image`
    width: 118px;
    height: 118px;
`

