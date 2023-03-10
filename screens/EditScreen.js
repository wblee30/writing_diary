import React from 'react'
import {Text, SafeAreaView, StyleSheet, TextInput, View} from 'react-native'
import EditHeader from '../components/EditHeader';
import {useRoute} from '@react-navigation/native'
import {withContext} from 'react-simplified-context'


const EditScreen = ({
  articles, 
  create,
  // id,
  update
}) =>{ 
  const route = useRoute();
    // ViewScreen에서 id값이 넘어오기때문에 이중으로 정의하면 에러남
  const id = route.params ? route.params.id : -1;
  const article = articles.find((a) => {
    return a.id === id
  });
  let title = article ? article.title : ''
  let content = article ? article.content : ''
  return(
    <SafeAreaView style={styles.container}>
      <EditHeader done={() => {
        if(id > -1){
            update(id, title, content)
        }else {
            create(title, content) 
        }
      }}/>
      <View style={styles.body}>
        <TextInput 
          placeholder='제목'
          onChangeText={(text) => {
            title = text
          }}
          style={styles.title}>
            {title}
        </TextInput>
        <View style={styles.divider}/>
        <TextInput 
          placeholder='이곳을 눌러 작성을 시작하세요.' 
          multiline={true} 
          onChangeText={(text) => {
            content = text
          }}
          style={styles.content}>
            {content}
        </TextInput>
      </View>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body:{
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title:{
    fontSize: 20,
    fontWeight: '600',
    color: '#212121'
  },
  content:{
    flex:1 ,
    fontSize: 16,
    lineHeight: 20,
    textAlignVertical: 'top',
    color: '#424242'
  },
  divider:{
    marginTop: 12,
    marginBottom: 12,
    height: 1,
    width: '100%',
    backgroundColor: '#E4E4E4',
  }
})

export default withContext(EditScreen)