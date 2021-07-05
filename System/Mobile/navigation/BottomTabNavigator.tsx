/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AquariumScreen from '../screens/Views/Aquarium/AquariumScreen';
import DiseaseScreen from '../screens/Views/Diseases/DiseaseScreen';
import FoodScreen from '../screens/Views/Food/FoodScreen';
import HomeScreen from '../screens/Views/Home/HomeScreen';
import WaterQualityScreen from '../screens/Views/WaterQuality/WaterQualityScreen';
import { BottomTabParamList } from '../types';



import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Kois"
            tabBarOptions={{ activeTintColor: Colors[ colorScheme ].tint }}>
            <BottomTab.Screen
                name="Kois"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ( { color } ) => <FontAwesome5 name="fish" size={24} color={color} />,
                }}
            />

            <BottomTab.Screen
                name="Food"
                component={FoodNavigator}
                options={{
                    tabBarIcon: ( { color } ) => <Ionicons name="fast-food-outline" size={24} color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Disease"
                component={DiseaseNavigator}
                options={{
                    tabBarIcon: ( { color } ) => <FontAwesome5 name="disease" size={24} color={color} />,
                }}
            />

            <BottomTab.Screen
                name="Tanks"
                component={AquariumNavigator}
                options={{
                    tabBarIcon: ( { color } ) => <MaterialCommunityIcons name="fishbowl-outline" size={24} color={color} />,
                }}
            />

            <BottomTab.Screen
                name="Water"
                component={WaterQualityNavigator}
                options={{
                    tabBarIcon: ( { color } ) => <MaterialCommunityIcons name="zodiac-aquarius" size={24} color={color} />,
                }}
            />

        </BottomTab.Navigator>
    );
}

const HomeStack = createStackNavigator<any>();
function HomeNavigator() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: 'Kois' }}
            />
        </HomeStack.Navigator>
    );
}

const FoodStack = createStackNavigator<any>();
function FoodNavigator() {
    return (
        <FoodStack.Navigator>
            <FoodStack.Screen
                name="FoodScreen"
                component={FoodScreen}
                options={{ headerTitle: 'Food for your Koi' }}
            />
        </FoodStack.Navigator>
    );
}


const DiseaseStack = createStackNavigator<any>();
function DiseaseNavigator() {
    return (
        <DiseaseStack.Navigator>
            <DiseaseStack.Screen
                name="DiseaseScreen"
                component={DiseaseScreen}
                options={{ headerTitle: 'Kois Diseases' }}
            />
        </DiseaseStack.Navigator>
    );
}

const AquariumStack = createStackNavigator<any>();
function AquariumNavigator() {
    return (
        <AquariumStack.Navigator>
            <AquariumStack.Screen
                name="AquariumScreen"
                component={AquariumScreen}
                options={{ headerTitle: 'Tank Design' }}
            />
        </AquariumStack.Navigator>
    );
}

const WaterQualityStack = createStackNavigator<any>();
function WaterQualityNavigator() {
    return (
        <WaterQualityStack.Navigator>
            <WaterQualityStack.Screen
                name="WaterQualityScreen"
                component={WaterQualityScreen}
                options={{ headerTitle: 'Water Quality' }}
            />
        </WaterQualityStack.Navigator>
    );
}
