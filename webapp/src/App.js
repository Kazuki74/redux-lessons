import React, { Component } from 'react';
import { connect } from "react-redux";

const App = ({ someState, doSomething }) => {
  return <div onClick={() => doSomething("some")}>{someState}</div>
}

const mapStateToProps = state => {
  return {
    someState: state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    doSomething: some => {
      dispatch({ type: "ADD", payload: some })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
