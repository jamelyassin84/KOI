import React from 'react'
import { Image } from 'react-native'
import { Text } from 'react-native'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import Colors from '../../../../constants/Colors'
import { collection } from '../../../../firebase/Collection'
import useColorScheme from '../../../../hooks/useColorScheme'
import styles from './show.style'


export default function ViewKoi( { route }: any ) {
    const { data } = route.params
    const colorScheme = useColorScheme();
    const [ food, setfood ] = React.useState( [] )
    const [ disease, setdisease ] = React.useState( [] )
    const [ tanks, settanks ] = React.useState( [] )


    React.useEffect( () => {
        getFood()
        getDiseases()
        getTanks()
    }, [] )


    const getFood = () => {
        let dataArray: any = []
        collection( 'food' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                setfood( dataArray )
            } )
    }

    const getDiseases = () => {
        let dataArray: any = []
        collection( 'disease' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                setdisease( dataArray )
            } )
    }

    const getTanks = () => {
        let dataArray: any = []
        collection( 'tank' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                settanks( dataArray )
            } )
    }




    return (
        <View>
            <ScrollView horizontal={true} style={{ marginTop: -60, backgroundColor: 'gray' }} showsHorizontalScrollIndicator={false}>
                {
                    data.images.map( ( image: any, key: any ) => {
                        return (
                            <Image key={key} style={styles.images} source={{ uri: image }} />
                        )
                    } )
                }
            </ScrollView>
            <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>{data.type}</Text>
            <Text style={{ marginTop: 7, color: Colors[ colorScheme ].text }}>Colors: <Text style={{ color: '#9DC16B' }}>{data.color}</Text> </Text>
            <Text style={{ marginTop: 7, color: Colors[ colorScheme ].text }}>Patterns: <Text style={{ color: '#9DC16B' }}>{data.pattern}</Text> </Text>


            <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Food</Text>
            {
                food.map( ( food: any, index: any ) => (
                    <View key={index}>
                        <Text>{food.food}</Text>
                        <Text>{food.description}</Text>
                        <Text>{food.effects}</Text>
                    </View>
                ) )
            }

            <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Diseases</Text>
            {
                disease.map( ( disease: any, index: any ) => (
                    <View key={index}>
                        <Text>{disease.disease}</Text>
                        <Text>{disease.cure}</Text>
                    </View>
                ) )
            }

            <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Tanks</Text>
            {
                tanks.map( ( tank: any, index: any ) => (
                    <View key={index}>
                        <Text>{tank.koi}</Text>
                        <Text>{tank.with}</Text>
                        <Text>{tank.same}</Text>
                    </View>
                ) )
            }

        </View>
    )
}
