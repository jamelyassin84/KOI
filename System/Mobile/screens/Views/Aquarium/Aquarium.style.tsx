import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create( {
    searchContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#46D094',
        height: 35,
        borderRadius: 5,
        flexDirection: 'row'
    },
    iconHolder: {
        width: 40,
        height: '100%',
        backgroundColor: '#46D094',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: -2,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    input: {
        paddingLeft: 20,
        height: '100%',
        width: '78%'
    },
    productContainer: {
        width: ( Dimensions.get( 'window' ).width / 2 ) - 10,
        borderRadius: 10,
        paddingBottom: 20,
        marginLeft: 7,
        marginBottom: 7
    },
    Name: {
        marginLeft: 5,
        marginTop: 12,
        fontSize: 20,
        textTransform: 'capitalize'
    },
    productImage: {
        minHeight: 180,
        width: '100%',
        resizeMode: 'stretch',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
} )