import { useState } from 'react'
import './App.css'

function App() {
    const title = 'Welcome to the new blog'
    const likes = 50
    // const person = { name: 'yoshi', age: '30'}
    const link = 'http://google.com'

   return (
    <div className="App">
      <div className="conten">
        <h1>{title}</h1>

        <p>Liked {likes} times</p>
        { /*<p> {person} </p>*/ }
        
        <p>{10}</p>
        <p>{'hello ninjas'}</p>
        <p>{ Math.random() * 10 }</p>
      
        <a href= {link}> Google site</a>

      </div>
    </div>
  )
}

export default App
