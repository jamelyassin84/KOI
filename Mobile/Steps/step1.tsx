import React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Step1() {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors[ colorScheme ].background
        }}
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    navigation.navigate( 'Step2' )
                }}
                style={{
                    flex: 1, position: 'relative',
                    zIndex: 99,
                }}
            >
                <Text
                    style={{
                        color: Colors[ colorScheme ].text,
                        zIndex: 9,
                        alignSelf: 'center', position: 'absolute',
                        top: '25%',
                        fontSize: 22,
                        textAlign: 'center',
                        fontWeight: '200',

                    }}>
                    Welcome to
                </Text>
                <Text
                    style={{
                        color: 'gray',
                        zIndex: 9,
                        alignSelf: 'center', position: 'absolute',
                        top: '60%',
                        fontSize: 35,
                        fontWeight: '200',
                        textAlign: 'center'
                    }}>
                    Everything but
                </Text>
                <Text
                    style={{
                        color: '#72D9E8',
                        zIndex: 9,
                        alignSelf: 'center', position: 'absolute',
                        top: '65%',
                        fontSize: 35,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>
                    Kois
                </Text>
                <Image
                    style={{
                        resizeMode: 'contain',
                        position: 'absolute',
                        top: '25%',
                        zIndex: 9,
                        alignSelf: 'center',
                        margin: 50,
                        height: 200

                    }}
                    source={require( '../assets/images/icon1.png' )}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    navigation.navigate( 'Step2' )
                }}
                style={styles.stepTab}>
                <View style={[ styles.stepperActive, ]}></View>
                <View style={[ styles.stepper, ]}></View>
                <View style={[ styles.stepper, ]}></View>
                <View style={[ styles.stepper, ]}></View>
                <View style={[ styles.stepper, ]}></View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create( {
    stepTab: {
        width: '100%',
        height: 90,
        zIndex: 100,
        position: 'absolute',
        bottom: '0%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    stepper: {
        width: 10,
        height: 10,
        borderRadius: 50,
        margin: 5,
        opacity: .5,
        backgroundColor: '#72D9E8'
    },
    stepperActive: {
        width: 10,
        height: 10,
        borderRadius: 50,
        margin: 5,
        backgroundColor: '#72D9E8'
    }
} )