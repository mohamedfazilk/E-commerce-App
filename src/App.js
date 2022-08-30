import React from 'react'
import { BrowserRouter, Routes, Route, Switch } from
'react-router-dom'
import { Navbar, Sidebar, Footer } from './components';

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute
} from './pages'


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

        <Route exact path='/about'>
          <About/>
        </Route>

        <Route exact path='cart'>
          <Cart/>
        </Route>

        <Route exact path='/product'>
          <Products/>
        </Route>


        <Route exact path='/products/:id'>
          <SingleProduct/>
        </Route>

        <Route exact path='/checkout'>
          <Checkout/>
        </Route>

        <Route exact path='*'>
          <Error/>
        </Route>

      </Switch>
  </Router>
  )
  
}
export default App