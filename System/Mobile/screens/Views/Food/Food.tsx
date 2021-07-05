import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { View } from 'react-native'
import styles from '../Home/Home.Style'
import { useNavigation } from '@react-navigation/native';
import useColorScheme from '../../../hooks/useColorScheme';
import Colors from '../../../constants/Colors';


export default function Food( props: any ) {

    const colorScheme = useColorScheme();

    const data = props.data


    return (
        <TouchableOpacity
            onPress={() => {
                // navigation.navigate( 'ShowPlant', { data: data.item } )
            }}
            style={[
                styles.productContainer,
                { backgroundColor: Colors[ colorScheme ].homeCard },
            ]}  >
            <Image style={styles.productImage} source={require( '../../../assets/placeholders/food.jpg' )} />
            <Text style={[ styles.plantName, { color: Colors[ colorScheme ].text } ]}>
                {data.item.food}
            </Text>
            <Text style={[ styles.quantity, { color: 'gray', } ]}>
                for your {data.item.koi}
            </Text>
        </TouchableOpacity>
    )
}
