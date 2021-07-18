import React from 'react'
import { 
    Text,
    StyleSheet,    
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Header from '../components/Header'
import ArticleItem from '../components/ArticleItem'

const ListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="나의 글" />
            <ArticleItem 
                article={{
                    id: 1,
                    title: '시선으로부터',
                    content: '심시선의 자식들 이야기',
                    date: '2021년 7월 18일'
                }}
            />
            <ArticleItem 
                article={{
                    id: 2,
                    title: '아무튼, 메모',
                    content: '메모하길 잘했다',
                    date: '2021년 7월 16일'
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
})

export default ListScreen