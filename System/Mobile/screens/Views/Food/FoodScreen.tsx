import React from 'react'
import { RefreshControl, View, } from 'react-native'
import styles from '../Home/Home.Style'
import SearchScreen from '../Home/SearchScreen'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Item from '../../../components/Placeholders/Item';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../Home/HomeHeader';
import { collection } from '../../../firebase/Collection';
import Food from './Food'

export default function FoodScreen() {
    const colorScheme = useColorScheme();
    const [ showSearch, setshowSearch ]: any = React.useState( false );
    const [ loading, setloading ]: any = React.useState( false );
    const [ items, setitems ]: any = React.useState( [] );
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

    const [ data, setData ]: any = React.useState( [] )
    const getKois = () => {
        let dataArray: any = []
        collection( 'food' ).get()
            .then( ( snapshots ) => {
                snapshots.forEach( ( doc: any ) => {
                    dataArray.push( doc.data() )
                } )
                setData( dataArray )
            } )
    }

    const renderPlaceholder = ( data: any = [ 1, 1, 1, 1, 1, 1, 1, 1 ] ) => (
        <Item />
    )

    const renderItem = ( data: any ) => (
        <Food data={data} />
    )


    return (
        <View style={{ backgroundColor: Colors[ colorScheme ].background, flex: 1 }}>
            <SearchScreen
                show={showSearch}
                showSearch={() => {
                    setshowSearch( false )
                }}
                data={( data: any ) => {
                    setData( data )
                }}
            />

            <HomeHeader
                searchIsShowing={showSearch}
                showSearch={() => {
                    setshowSearch( true )
                }}
                show={show}
                data={( data: any ) => {
                    // setproducts( data )
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
                keyExtractor={data.index}
                data={data}
                renderItem={data.length == 0 ? renderPlaceholder : renderItem}
                numColumns={1}
            />

        </View>
    )
}
