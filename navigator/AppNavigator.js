import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';
import DataFetching from '../DataFetching';
import tryThis from '../Screens/tryThis';
import Cure from '../Screens/Cure';
import Country from '../Screens/Country';
import Questions from '../Screens/Questions';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
    const navigation = useNavigation();

    return (
        <MaterialIcons name='menu' size={30} onPress={() => { navigation.openDrawer() }} style={{ paddingLeft: 15 }} />

    );
}
function AppNavigator(props) {

    function stackScreens() {
        return (
            <Stack.Navigator screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}>
                <Stack.Screen
                    name='Track Corona'
                    component={tryThis}
                    options={{ headerTitleAlign: "center" }}
                />
                <Stack.Screen
                    name='Cases World Wide'
                    component={DataFetching}
                    options={{ headerTitleAlign: "center" }}
                />
                <Stack.Screen
                    name='Cure'
                    component={Cure}
                    options={{ headerTitleAlign: "center" }}
                />
                <Stack.Screen name='Questions' component={Questions} options={{ headerTitleAlign: 'center' }} />

            </Stack.Navigator>
        )
    }
    function countryScreen() {
        return (
            <Stack.Navigator screenOptions={{
                headerLeft: () => <HeaderLeft />
            }} >
                <Stack.Screen name='Country' component={Country} options={{ headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={stackScreens} />
                <Drawer.Screen name='Country' component={countryScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default AppNavigator;

