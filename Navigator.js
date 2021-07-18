import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'

import ListScreen from './screens/ListScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import EditScreen from './screens/EditScreen'
import { Modal } from 'react-native'

const TabNavigator = createBottomTabNavigator({
    List: {
        screen: ListScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="md-list" size={25} color={tintColor} />
            },
            tabBarLabel: '목록'
        }
    }, 
    AddButton : {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="ios-add-circle" size={29} color='#DA5746' />
            },
            tabBarOnPress: ({ navigation }) => {
                navigation.navigate('Edit')
            }
        }
    },
    Bookmark: {
        screen: BookmarkScreen,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Ionicons name="md-heart" size={25} color={tintColor} />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: '#424242',
        inactiveTintColor: '#9E9E9E',
        showLabel: false,
        borderTopColor: '#BDBDBD',
        backgroundColor: '#FFFFFF',
    } 
})

const AppNavigator = createStackNavigator({ 
    Edit: EditScreen,
    Tab: TabNavigator,
}, {
    initialRouteName: 'Tab',
    mode: 'modal',
    headerMode: 'none',
})

export default createAppContainer(AppNavigator )