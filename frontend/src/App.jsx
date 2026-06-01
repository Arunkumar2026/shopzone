import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Singup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';

function App() {

  return (
    <BrowserRouter>

    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Singup/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
