import { StatusBar } from 'expo-status-bar';
import firebase from 'firebase';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { config } from './firebase/config';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    React.useEffect( () => {
        firebase.initializeApp( config );
    }, [] )

    if ( !isLoadingComplete ) {
        return null;
    } else {
        return (
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        );
    }
}
