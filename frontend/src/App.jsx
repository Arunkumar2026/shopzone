import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Singup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';

function App() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const [sortOptions, setSortOptions] = useState("");

  return (
    <BrowserRouter>

    <Navbar search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sortOptions={sortOptions}
            setSortOptions={setSortOptions}/>
    
      <Routes>
        <Route path='/' element={<Home search={search} category={category} sortOptions={sortOptions}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
