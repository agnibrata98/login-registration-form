import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Auth from './components/auth/loginAndRegister/Auth';
import Profile from './components/auth/profile/Profile';
import Home from './components/cms/home/Home';
import About from './components/cms/about/About';
import Create from './components/cms/create/Create';
import ProductDetails from './components/cms/productdetails/ProductDetails';
import ProductList from './components/cms/productlist/ProductList';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Login and Register */}
          <Route path='/' element={<Auth />} />

          {/* Profile Page */}
          <Route path='/profile' element={<Profile />} />

          {/* CMS Routes */}
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/create' element={<Create />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/productlist' element={<ProductList />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
