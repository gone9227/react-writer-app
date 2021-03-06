import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { 
    withNavigation,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

const ViewHeader = ({
    navigation 
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => { navigation.goBack() }}
                hitSlop={{ top: 32, bottom: 32, left: 32, right: 32, }}
            >
                <Ionicons name="ios-arrow-back" size={28} color="#DA5746" />
            </TouchableOpacity>
            <Text style={styles.title}>
                제목
            </Text>
            <TouchableOpacity
                activeOpacity={0.8}
                hitSlop={{ top: 32, bottom: 32, left: 32, right: 32, }}
            >
                <Ionicons name="md-heart-outline" size={24} color="#DA5746" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 48,
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingLeft: 16,
        paddingRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F1F1F1',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#212121',
    }
})

export default withNavigation(ViewHeader) 