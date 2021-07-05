import React from 'react'
import { RefreshControl, View, } from 'react-native'
import SearchScreen from './SearchScreen'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import HomeHeader from './HomeHeader';
import { FlatList } from 'react-native-gesture-handler';
import Item from '../../../components/Placeholders/Item';
import { collection } from '../../../firebase/Collection';
import Koi from './Koi';


export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const [ showSearch, setshowSearch ]: any = React.useState( false );
    const [ loading, setloading ]: any = React.useState( false );
    const [ show, setShow ] = React.useState( true )


    function scrollHandler( event: any ) {
        if ( event.nativeEvent.contentOffset.y > 1 ) {
            setShow( false )
        } else {
            setShow( true )
        }
    }

    React.useEffect( () => {
        getKois()
    }, [] )

    const [ kois, setkoi ]: any = React.useState( [] )
    const getKois = () => {
        let koisArray: any = []
        collection( 'kois' ).get()
            .then( ( kois ) => {
                kois.forEach( ( koi: any ) => {
                    koisArray.push( koi.data() )
                } )
                setkoi( koisArray )
            } )
    }

    const renderPlaceholder = ( data: any = [ 1, 1, 1, 1, 1, 1, 1, 1 ] ) => (
        <Item />
    )


    const renderItem = ( data: any ) => (
        <Koi data={data} />
    )

    return (
        <View style={{ backgroundColor: Colors[ colorScheme ].background, flex: 1 }}>
            <SearchScreen
                show={showSearch}
                showSearch={() => {
                    setshowSearch( false )
                }}
                data={( data: any ) => {
                    setkoi( data )
                }}
            />

            <HomeHeader
                searchIsShowing={showSearch}
                showSearch={() => {
                    setshowSearch( true )
                }}
                show={show}
                data={( data: any ) => {
                    setkoi( data )
                }}
            />

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={() => {
                            getKois()
                        }}
                    />
                }
                onScroll={( event ) => {
                    scrollHandler( event )
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={kois.index}
                data={kois}
                renderItem={kois.length == 0 ? renderPlaceholder : renderItem}
                numColumns={2}
            />
        </View>
    )
}
