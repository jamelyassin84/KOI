import React, { useEffect } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import styles from './Home.Style'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { collection } from '../../../firebase/Collection';

type Props = {
    show: Boolean,
    headerColor: String,
    showSearch: Function
    data: Function
}

export default function SearchScreen( props: any ) {

    const colorScheme = useColorScheme();

    const [ focus, setfocus ] = React.useState( false )
    const [ keyword, setkeyword ] = React.useState( '' )
    const [ searchResults, setsearchResults ]: any = React.useState( [] )

    let inputRef: any = React.createRef();

    useEffect( () => {
        if ( props.show == true ) {
            setfocus( true )
            inputRef.focus()
        } else {
            inputRef.blur()
        }

    }, [ props.show ] )

    useEffect( () => {
        let koiArray: any = []
        collection( 'koi' ).where( 'type', '==', keyword ).get().then( ( kois ) => {
            kois.forEach( ( koi ) => {
                koiArray.push( koi.data() )
            } )
        } )
        setsearchResults( koiArray )


    }, [ keyword ] )

    return (
        <View style={[ {
            position: 'absolute',
            zIndex: 999999,
            width: '100%',
            height: '100%',
            backgroundColor: Colors[ colorScheme ].background,
            paddingTop: 50
        },
        props.show == false ? { left: -500 } : {}
        ]
        }>
            <View style={[ { padding: 10, position: 'relative', zIndex: 3, flexDirection: 'row', alignItems: 'center' },
            { backgroundColor: '#0D6EFD', }
            ]}>
                <View style={[
                    styles.searchContainer,
                    { backgroundColor: Colors[ colorScheme ].background, width: '85%', marginRight: 10 },
                    { borderColor: '#0D6EFD' },
                ]
                }>
                    <TextInput
                        autoFocus={focus}
                        ref={ref => inputRef = ref}
                        selectionColor={'#0D6EFD'}
                        style={[ styles.input,
                        {
                            color: Colors[ colorScheme ].text,
                            width: '97%',
                        }
                        ]}
                        onChangeText={( text ) => {
                            setkeyword( text )
                        }}
                        returnKeyType="search"
                        clearButtonMode="always"
                        value={keyword}
                        onSubmitEditing={() => {
                            setkeyword( '' )
                            setfocus( false )
                            props.showSearch()
                            props.data( {
                                value: searchResults
                            } )
                        }}
                        placeholder='Search' />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setkeyword( '' )
                        setfocus( false )
                        props.showSearch()
                    }}>
                    <Text style={{ color: 'white', marginTop: 5 }}>Cancel</Text>
                </TouchableOpacity>
            </View>

            {
                searchResults.map( ( result: any, index: any ) => (
                    <TouchableOpacity
                        onPress={() => {
                            setkeyword( '' )
                            setfocus( false )
                            props.showSearch()
                            props.data( {
                                value: searchResults
                            } )
                        }}
                        style={styles.list}
                        key={index}>
                        <Ionicons name="md-search-outline" size={19} color="gray" />
                        <Text style={{ color: 'gray', marginLeft: 10 }}>
                            {result.plantInfo.name}
                        </Text>
                    </TouchableOpacity>
                ) )
            }
        </View>
    )
}
