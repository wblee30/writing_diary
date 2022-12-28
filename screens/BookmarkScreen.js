import React from 'react'
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import Header from '../components/Header';
import ArticleItem from '../components/ArticleItem';
import {withContext} from 'react-simplified-context';

const BookmarkScreen = ({articles}) =>{
  return(
    <SafeAreaView style={styles.container}>
      <Header title="즐겨찾기"/>
      <FlatList 
        data={articles.filter((article) => {
          return article.bookmarked
        })} 
        renderItem={({item}) => {
          return <ArticleItem article={item} /> }}
        keyExtractor={(item) => {return `${item.id}`}}
     />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default withContext(BookmarkScreen);