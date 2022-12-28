import React from 'react'
import {Text, SafeAreaView, StyleSheet, FlatList} from 'react-native'
import ArticleItem from '../components/ArticleItem';
import Header from '../components/Header';
import {withContext} from 'react-simplified-context';

const ListScreen = ({
  articles,
}) =>{
  return(
    <SafeAreaView style={styles.container}>
      <Header title="나의 글"/>
      <FlatList 
        data={articles} 
        renderItem={({item}) => {
          return <ArticleItem article={item} /> }}
        keyExtractor={(item) => {return `${item.id}`}}
     />
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default withContext(ListScreen);