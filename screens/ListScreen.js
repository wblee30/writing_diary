import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'
import ArticleItem from '../components/ArticleItem';
import Header from '../components/Header';

const ListScreen = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <Header title="나의 글"/>
      <ArticleItem 
        article={{
          id:1,
          title: '청춘의',
          content:'잠겨죽어도 좋으니 너는 물처럼 내게 밀려오라',
          date: '2019년 4월 7일'
        }}
      />
      <ArticleItem 
        article={{
          id: 2,
          title: '내 마음에 ',
          content:'크리스마스',
          date: '2022년 12월 25일'
        }}
      />
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default ListScreen;