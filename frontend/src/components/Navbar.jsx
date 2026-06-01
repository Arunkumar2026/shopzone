import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='bg-black text-white items-center px-4 py-3'>
        <div className='flex justify-between items-center'>
            <Link to='/' className='text-2xl items-center'>ShopZone</Link>

            <div className='hidden md:flex gap-6 items-center'>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>

            <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes/> : <FaBars/> }
            </div>
        </div>

        {menuOpen && (
            <div className='flex flex-col gap-4 mt-4 md:hidden'>
                <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to='/cart' onClick={() => setMenuOpen(false)}>Cart</Link>
                <Link to='/login' onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to='/signup' onClick={() => setMenuOpen(false)}>Signup</Link>
            </div>
        )}
    </nav>
  )
}

export default Navbar