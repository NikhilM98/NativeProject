import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}> {props.headerText} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});


export default Header;
