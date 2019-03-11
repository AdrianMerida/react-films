import React, { Fragment } from 'react'
import FilmList from './components/films/FilmList'
import Header from './components/misc/Header'

const App = () => (
  <Fragment>
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <FilmList />
        </div>
      </div>
    </div>
  </Fragment>
)

export default App
