import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import styles from './WaterQuality.style'
import { Ionicons } from '@expo/vector-icons';
import { textColor } from '../../../constants/Theme'
import { collection } from '../../../firebase/Collection';

export default function WaterQualityScreen() {

    const colorScheme = useColorScheme();
    const [ temperature, settemperature ]: any = React.useState( 0 )
    const [ ph, setph ]: any = React.useState( 0 )


    React.useEffect( () => {
        getTemperature()
        getPh()
    }, [] )


    const getTemperature = () => {
        collection( 'temperature' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    settemperature( doc.data()[ 'value' ] )
                } )
            } )
    }

    const getPh = () => {
        collection( 'acidity' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    setph( doc.data()[ 'value' ] )
                } )
            } )
    }

    return (
        <View style={[ styles.container, { backgroundColor: Colors[ colorScheme ].background, flex: 1, justifyContent: 'center' } ]}>

            <Ionicons style={{ alignSelf: 'center', marginBottom: 50 }} name="water-sharp" size={124} color="#72D9E8" />

            <Text style={{ color: Colors[ colorScheme ].text }}>Water Temperature: {temperature + '%'}</Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#F7BB00', width: temperature + '%' } ]}></View>
            </View>

            <Text style={{ color: Colors[ colorScheme ].text }}>Water pH Level: {ph + '%'}</Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#CFF700', width: ph + '%' } ]}></View>
            </View>

            <Text style={{ color: Colors[ colorScheme ].text }}>Overall Quality: {( parseFloat( ph ) + parseFloat( ph ) ) + '%'} </Text>
            <View style={styles.progressContainer}>
                <View style={[ styles.progress, { backgroundColor: '#22A6F2', width: ( parseFloat( ph ) + parseFloat( ph ) ) + '%' } ]}></View>
            </View>



        </View>
    )
}
