import React from 'react'
import { BrowserRouter, Routes, Route } from
'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  ProductsPage,
  PrivateRoute,
  AuthWrapper,
} from './pages'
import Testing from './Testing'

function App() {
  return<div>
    <Testing/>
  </div>
  
}
export default App