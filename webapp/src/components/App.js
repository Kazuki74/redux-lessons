import React, { Component } from 'react';

const App = ({day, title, number, plus, minus}) => (
  <div>
    <h2>{title} {day} {number}</h2>
    <button onClick={()=>{plus(10)}}>+10</button>
    <button onClick={()=>{minus(10)}}>-10</button>
  </div>
)

export default App;