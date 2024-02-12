import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Product from './Components/Product';
import FeaturedProducts from './Components/FeaturedProducts';
import NewProducts from './Components/NewProducts';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Admin from './Components/Admin';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Product />} >
          <Route index element={<FeaturedProducts />} />
          <Route path='feature' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>

  );
}

export default App
