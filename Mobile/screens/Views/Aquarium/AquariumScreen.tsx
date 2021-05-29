import React from 'react'
import { RefreshControl, View, } from 'react-native'
import styles from '../Home/Home.Style'
import SearchScreen from '../Home/SearchScreen'
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import Item from '../../../components/Placeholders/Item';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../Home/HomeHeader';


export default function AquariumScreen() {
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

    const renderPlaceholder = () => (
        <Item />
    )

    const renderItem = () => (
        <View />
    )

    return (
        <View style={{ backgroundColor: Colors[ colorScheme ].background, flex: 1 }}>
            <SearchScreen
                show={showSearch}
                showSearch={() => {
                    setshowSearch( false )
                }}
                data={( data: any ) => {
                    if ( data.type == "plant" ) {
                        // setplants( data.value )
                        return
                    }
                    // setproducts( data.value )
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
                        onRefresh={() => { }}
                    />
                }
                onScroll={( event ) => {
                    scrollHandler( event )
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={items.index}
                data={items.length == 0 ? [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] : items}
                renderItem={items.length == 0 ? renderPlaceholder : renderItem}
                numColumns={2}
            />
        </View>
    )
}
