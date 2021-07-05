import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
export default function Step5() {
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
                    navigation.navigate( 'Root' )
                }}
                style={{
                    flex: 1, position: 'relative',
                    zIndex: 99,
                }}
            >
                <MaterialCommunityIcons name="fishbowl"
                    style={{
                        top: '25%',
                        alignSelf: 'center',
                        position: 'absolute',
                    }}
                    size={120}
                    color="#72D9E8"
                />

                <Text
                    style={{
                        color: Colors[ colorScheme ].text,
                        zIndex: 9,
                        alignSelf: 'center', position: 'absolute',
                        top: '50%',
                        fontSize: 35,
                        fontWeight: '200',
                        textAlign: 'center',
                        paddingHorizontal: 50
                    }}>
                    <Text style={{ fontWeight: '500' }}>Check </Text> water quality and <Text style={{ fontWeight: '500' }}>have and Idea  </Text>on how many Koi should you place
                </Text>

            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    navigation.navigate( 'Root' )
                }}
                style={styles.stepTab}>
                <View style={styles.stepper}></View>
                <View style={styles.stepper}></View>
                <View style={styles.stepper}></View>
                <View style={styles.stepper}></View>
                <View style={styles.stepperActive}></View>
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