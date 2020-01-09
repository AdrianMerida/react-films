import React from 'react'
import FilmList from './components/films/FilmList'
import Header from './components/misc/Header'

const App = () => (
  <div className="App">
    <Header />

    <div className="container">
      <div className="row">
        <div className="col-12">
          <FilmList />
        </div>
      </div>
    </div>
  </div>
)

export default App
