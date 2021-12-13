import React from 'react'
import {
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { 
    SafeAreaView,
    withNavigation,
} from 'react-navigation'
import ViewHeader from '../components/ViewHeader'

const ViewScreen = ({
    navigation,
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <ViewHeader />
            <ScrollView>
                <TouchableOpacity 
                    activeOpacity={0.8}
                    onLongPress={() => {
                        navigation.navigate('Edit')
                    }}
                >
                    <Text style={styles.content}>
                        작년부터 직장인들이 근로 소득 외에 얻을 수 있는 부수입을 다루는 콘텐츠들이 인기가 많다. 
                        아무래도 자산 가격이며 물가며 모든 것이 급격하게 오르는데 내 월급의 상승은 그에 비하면 매우 미미하기 때문이 아닐까 싶다.
                    </Text>
                </TouchableOpacity>
                <Text style={styles.date}>
                    2021년 7월 26일
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
        fontSize: 16,
        lineHeight: 20,
        color: '#424242',
    },
    date: {
        padding: 20,
        paddingTop: 0,
        fontSize: 12,
        color: '#BDBDBD',
    }
})

export default withNavigation(ViewScreen)