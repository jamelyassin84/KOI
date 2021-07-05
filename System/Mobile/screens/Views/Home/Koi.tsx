import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { View } from 'react-native'
import styles from './Home.Style'

import { useNavigation } from '@react-navigation/native';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';


export default function Koi( props: any ) {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    const data = props.data

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate( 'ViewKoi', { data: data.item } )
            }}
            style={[
                styles.productContainer,
                { backgroundColor: Colors[ colorScheme ].homeCard },
            ]}  >
            <Image style={styles.productImage} source={{ uri: data.item.images[ 0 ] || '' }} />

            <Text style={[ styles.plantName, { color: Colors[ colorScheme ].tint } ]}>
                {data.item.type}
            </Text>
            <Text style={[ styles.quantity, { color: 'gray', } ]}>
                Color: {data.item.color}
            </Text>
            <Text style={[ styles.quantity, { color: 'gray', } ]}>
                Patterns: {data.item.pattern}
            </Text>
        </TouchableOpacity>
    )
}
