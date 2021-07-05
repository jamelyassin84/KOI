import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Home.Style'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function HomeHeader( props: any ) {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    let searchInput: any
    return (
        <View style={[ props.show != true ? {
            backgroundColor: Colors[ colorScheme ].background, shadowColor: "black",
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            zIndex: 1,
            elevation: 3,
            shadowOffset: {
                width: 0,
                height: 1,
            },
        } : {},
        props.searchIsShowing == false ? {} : { position: 'absolute', top: -500 }
        ]}>
            <View>
                <Image style={{
                    height: 20,
                    width: 20,
                    marginTop: 30,
                    marginLeft: 20,
                    marginBottom: 20,
                    alignSelf: 'center',
                    transform: [
                        {
                            scale: 2
                        }
                    ]
                }} source={require( '../../../assets/images/icon1.png' )} />
            </View>
            {/* <View style={[ { padding: 10, position: 'relative', zIndex: 3 } ]}>
                <View style={[
                    styles.searchContainer,
                    { backgroundColor: Colors[ colorScheme ].background },
                    { borderColor: 'rgba(150,150,150,.2)' },
                    { marginTop: 10 } ]
                }>
                    <View style={[
                        styles.iconHolder,
                        { backgroundColor: Colors[ colorScheme ].tabIconSelected, shadowColor: "#0D6EFD" }
                    ]}>
                        <Ionicons name="md-search-outline" size={24} color="white" />
                    </View>
                    <TextInput
                        ref={ref => searchInput = ref}

                        onTouchEndCapture={() => {
                            searchInput.blur()
                            props.showSearch()
                        }}
                        selectionColor={Colors[ colorScheme ].tabIconSelected}
                        style={[ styles.input, { color: Colors[ colorScheme ].text } ]}
                        placeholder='Search' />
                </View>
            </View> */}
        </View>
    );
}
