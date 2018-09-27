import React, { Component } from 'react';

const App = ({day, title, number, plus, minus, asyncMinus, getJson}) => (
  <div>
    <h2>{title} {day} {number}</h2>
    <button onClick={()=>{plus(10)}}>+10</button>
    <button onClick={()=>{minus(10)}}>-10</button>
    <button onClick={()=>{asyncMinus(10)}}>Async -10</button>
    <button onClick={()=>{getJson()}}>getJson</button>
  </div>
)

export default App;