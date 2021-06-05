import React, {useState} from 'react';
import Search from "./components/Search"
import MovieTemplate from "./components/MovieTemplate";

function App(){
  return (
      <MovieTemplate>

        <Search></Search>
      </MovieTemplate>
  );
}

export default App;
