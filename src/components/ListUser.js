import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, Image, LayoutAnimation, Linking, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './CardSection';
import Button from './Button';
import * as actions from '../actions';

class ListUser extends Component {
    constructor() {
        super();
    
        if (Platform.OS === 'android') {
          UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { details, expanded } = this.props;
        if (expanded) {
            return (
            <View>
                <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                Age
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                {details.age}
                            </Text>
                        </View>
                </CardSection>
                <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                College
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                {details.college}
                            </Text>
                        </View>
                </CardSection>
                <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                Branch
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                {details.branch}
                            </Text>
                        </View>
                </CardSection>
                <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                Hometown
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                {details.home}
                            </Text>
                        </View>
                </CardSection>
                <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                Description
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center', }}>
                                {details.description}
                            </Text>
                        </View>
                </CardSection>
                <CardSection>
                    <Button onPress={() => Linking.openURL(details.url)}>
                        Contact Him!!
                    </Button>
            </CardSection>
            </View>
            );
        }
    }

    render() {
        const { titleStyle, imageStyle } = styles;
        const { id, name, image } = this.props.details;


        return (
            <TouchableWithoutFeedback 
            onPress={() => this.props.selectUser(id)}
            >
                <View style={{ marginBottom: 20 }}>
                    <CardSection>
                        <Image style={imageStyle} source={{ uri: image }} />
                    </CardSection>
                    <CardSection>
                        <View style={{ flex: 1 }}>
                            <Text style={titleStyle}>
                                {name}
                            </Text>
                        </View>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        textAlign: 'center'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedUserId === ownProps.details.id;
    return { expanded };
};

export default connect(mapStateToProps, actions)(ListUser);
