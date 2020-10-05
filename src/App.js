import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filter from './Filter';
import BookList from './BookList';
import BookItem from './BookItem';

function App() {
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

export default App;