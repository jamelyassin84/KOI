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
        collection( 'food' )
            .where( 'koi', '==', data.type ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                setfood( dataArray )
            } )
    }

    const getDiseases = () => {
        let dataArray: any = []
        collection( 'disease' )
            .where( 'koi', '==', data.type ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                setdisease( dataArray )
            } )
    }

    const getTanks = () => {
        let dataArray: any = []
        collection( 'tank' )
            .where( 'koi', '==', data.type ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                settanks( dataArray )
            } )
    }




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <ScrollView horizontal={true} style={{ marginTop: -60, backgroundColor: 'gray' }} showsHorizontalScrollIndicator={false}>
                {
                    data.images.map( ( image: any, key: any ) => {
                        return (
                            <Image key={key} style={styles.images} source={{ uri: image }} />
                        )
                    } )
                }
            </ScrollView>
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>{data.type}</Text>
                <Text style={{ marginTop: 7, color: 'gray', fontSize: 20 }}>{data.description} </Text>
                <Text style={{ marginTop: 27, color: Colors[ colorScheme ].text }}>Colors: <Text style={{ color: 'gray' }}>{data.color}</Text> </Text>
                <Text style={{ marginTop: 7, color: Colors[ colorScheme ].text, marginBottom: 50 }}>Patterns: <Text style={{ color: Colors[ colorScheme ].tint }}>{data.pattern}</Text> </Text>


                <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Food</Text>
                <Text style={[ food.length === 0 ? {} : {
                    position: 'absolute',
                    left: -500
                }, { marginTop: 1, color: 'gray', fontSize: 20, } ]}>No food available for this koi yet..</Text>
                {
                    food.map( ( food: any, index: any ) => (
                        <View key={index} style={{ marginTop: 30 }}>
                            <Text style={{ marginTop: 17, color: 'orange', fontSize: 30, fontWeight: 'bold' }}>{index + 1}. {food.food}</Text>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Description</Text>
                            <Text style={{ marginTop: 1, color: 'gray', fontSize: 20 }}>{food.description}</Text>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Effects</Text>
                            <Text style={{ marginTop: 1, color: 'gray', fontSize: 20 }}>{food.effects}</Text>
                        </View>
                    ) )
                }

                <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Diseases</Text>
                <Text style={[ food.length === 0 ? {} : {
                    position: 'absolute',
                    left: -500
                }, { marginTop: 1, color: 'gray', fontSize: 20, } ]}>No found diseases for this koi yet..</Text>
                {
                    disease.map( ( disease: any, index: any ) => (
                        <View key={index}>
                            <Text style={{ marginTop: 17, color: 'red', fontSize: 30, fontWeight: 'bold' }}>{index + 1}. {disease.disease}</Text>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Description</Text>
                            <Text style={{ marginTop: 1, color: 'gray', fontSize: 20 }}>{disease.description}</Text>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Cure</Text>
                            <Text style={{ marginTop: 1, color: '#28DA37', fontSize: 20 }}>{disease.cure}</Text>
                        </View>
                    ) )
                }

                <Text style={[ styles.name, { color: Colors[ colorScheme ].text } ]}>Tanks</Text>
                <Text style={[ food.length === 0 ? {} : {
                    position: 'absolute',
                    left: -500
                }, { marginTop: 1, color: 'gray', fontSize: 20, } ]}>No tank specifications available for this koi yet..</Text>
                {
                    tanks.map( ( tank: any, index: any ) => (
                        <View key={index}>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Desired Temperature</Text>
                            <Text style={{ marginTop: 1, color: 'gray', fontSize: 20 }}>{tank.with}</Text>
                            <Text style={{ marginTop: 17, color: Colors[ colorScheme ].text, fontSize: 20 }}>Desired pH Level</Text>
                            <Text style={{ marginTop: 1, color: '#28DA37', fontSize: 20 }}>{tank.same}</Text>
                        </View>
                    ) )
                }
            </View>
            <View style={{ height: 150 }}></View>
        </ScrollView>
    )
}
