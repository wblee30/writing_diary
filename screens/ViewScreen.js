import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native'
import ViewHeader from '../components/ViewHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import {withContext} from 'react-simplified-context'

const ViewScreen = ({
  articles,
  toggle
}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params.id;
  const article = articles.find((a) => {
    return a.id === id
  })
  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader 
      title ={article.title}
      bookmarked = {article.bookmarked}
      bookmark={() => {
        toggle(id)
      }}/>
      <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onLongPress={()=> {navigation.navigate('Edit', {id:id}); }}>
          <Text style={styles.content}>{article.content}</Text>
          <Text style={styles.date}>{article.date}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content:{
    padding: 20,
    fontSize: 16,
    lineHeight: 20,
    color: '#424242'
  },
  date:{
    padding: 20,
    paddingTop: 20,
    fontSize: 12,
    color: '#BDBDBD'
  }
})

export default withContext(ViewScreen)