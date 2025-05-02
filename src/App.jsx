import React from 'react'
import StarRating from './StarRating'
import './App.css'

function App() {
  function handleRatingSubmit(rating){
    console.log("User rated: " + rating)
  }
  return(
    <div className="App">
      <h1>Welcome to Maja's Rating App</h1>
      <StarRating onSubmit={handleRatingSubmit}/>
    </div>
  )
}

export default App;
