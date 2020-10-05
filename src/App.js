import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filter from './Filter';
import BookList from './BookList';
import BookItem from './BookItem';

class App extends React.Component {
  state = {
    bookList: [],
    loading: false,
    filterSelect: null,
    printTypeSelect: null,
  }

  BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=f';
  API_Key = '&key=AIzaSyBTmhbI8R9kc6tGeRmx2IZMfvaZYnrgzSM';

  componentDidMount(){
    const keyword = getKeyword();
    fetch(`${this.BASE_URL}${keyword}${this.API_Key}`)
      .then(resp => resp.json)
      .then(data => {
        console.log(data)
    })
  }
  
  render(){
    return (
      <main className='App'>
        <Header />
        <SearchBar />
        <Filter />
        <BookList />
        <BookItem />
      </main>
    );
  }
  
}

export default App;