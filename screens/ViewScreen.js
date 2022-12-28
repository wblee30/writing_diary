import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native'
import ViewHeader from '../components/ViewHeader'
import { useNavigation } from '@react-navigation/native'

const ViewScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ViewHeader/>
      <ScrollView>
        <TouchableOpacity activeOpacity={0.8} onLongPress={()=> {navigation.navigate('Edit'); }}>
          <Text style={styles.content}>잠겨죽어도 좋으니 너는 물처럼 내게 밀려오라</Text>
          <Text style={styles.date}>2022년 12월 28일</Text>
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

export default ViewScreen