import React from 'react'
import {Text, SafeAreaView, StyleSheet} from 'react-native'
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';

const BookmarkScreen = () =>{
  return(
    <SafeAreaView style={styles.container}>
      <Header title="즐겨찾기"/>
      <ArticleItem 
        article={{
          id:1,
          title: '청춘의',
          content:'잠겨죽어도 좋으니 너는 물처럼 내게 밀려오라',
          date: '2019년 4월 7일'
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default BookmarkScreen;