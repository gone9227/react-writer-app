import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Navigator'
import { ContextProvider } from 'react-simplified-context'

export default class App extends React.Component {
  state = {
    articles: [{
        id: 1,
        title: '시선으로부터',
        content: '심시선의 자식들 이야기',
        date: '2021년 7월 18일',
        bookmarked: true,
    }, {
      id: 2,
      title: '아무튼, 메모',
      content: '메모하길 잘했다',
      date: '2021년 7월 16일'
    }]
  }
  
  render(){
    return (
      <ContextProvider
        articles={this.state.articles}
      >
        <Navigator /> 
      </ContextProvider>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
