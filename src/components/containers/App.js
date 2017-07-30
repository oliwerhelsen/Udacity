import React from 'react'
import {
  Route
} from 'react-router-dom'
import Search from './Search'
import Home from './Home'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
      </div>
    )
  }
}

export default BooksApp
