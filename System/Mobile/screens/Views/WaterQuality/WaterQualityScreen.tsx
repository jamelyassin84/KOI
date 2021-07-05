import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import styles from './WaterQuality.style'
import { Ionicons } from '@expo/vector-icons';
import { textColor } from '../../../constants/Theme'

export default function WaterQualityScreen() {

    const colorScheme = useColorScheme();
    const [ temperature, settemperature ] = React.useState( 20 )
    const [ ph, setph ] = React.useState( 24 )
    const [ quality, setquality ] = React.useState( 70 )



    return (
        <View style={[ styles.container, { backgroundColor: Colors[ colorScheme ].background, flex: 1 } ]}>

            <Ionicons style={{ alignSelf: 'center', marginBottom: 50 }} name="water-sharp" size={124} color="#72D9E8" />

            <Text style={{ color: Colors[ colorScheme ].text }}>Water Temperature: {temperature + '%'}</Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#F7BB00', width: temperature + '%' } ]}></View>
            </View>

            <Text style={{ color: Colors[ colorScheme ].text }}>Water pH Level: {ph + '%'}</Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#CFF700', width: ph + '%' } ]}></View>
            </View>

            <Text style={{ color: Colors[ colorScheme ].text }}>Overall Quality: {quality + '%'} </Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#22A6F2', width: quality + '%' } ]}></View>
            </View>


            <Text style={{
                color: Colors[ colorScheme ].text, textAlign: 'center',
                fontSize: 20,
                marginTop: 50
            }}>Water Quality Seems Nice</Text>

        </View>
    )
}
