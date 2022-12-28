import React from 'react';
import Navigator from './Navigator';
import { ContextProvider } from 'react-simplified-context';

export default class App extends React.Component {
  state = {
    articles: [{
      id: 1,
      title: '청춘의 시',
      content: '잠겨죽어도 좋으니 너는 물처럼 내게 밀려오라',
      date: '2019년 4월 7일',
      bookmarked: true,
    },
    {
      id: 2,
      title: '내 마음에 ',
      content: '크리스마스',
      date: '2022년 12월 25일'
    }],
    id:3,
  };

  render() {

    return(
      <ContextProvider 
        articles={this.state.articles} 
        create={(title, content)=> {
          const now = new Date()
          this.setState({
            articles: [{
              id: this.state.id,
              title: title, 
              content: content,
              bookmarked: false,
              data: `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
            }].concat(this.state.articles),
            id: this.state.id+1,
          })
      }}>
         <Navigator />
      </ContextProvider>
    );

  }
}
