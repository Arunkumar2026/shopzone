import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import { CartContext } from '../context/CartContext';

import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';


const Navbar = ({ search, setSearch, category, setCategory, sortOptions, setSortOptions}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    const { cartItems } = useContext(CartContext);

  return (
    <nav className='bg-black text-white items-center px-4 py-3'>
        <div className='flex justify-between items-center'>
            <Link to='/' className='text-2xl items-center'>ShopZone</Link>

            <div className='hidden lg:flex gap-4 items-center flex-nowrap'>
                <Link to="/">Home</Link>
                <input type="text" placeholder='Search products...' value={search} onChange={(e) => setSearch(e.target.value)} className='px-3 py-1 rounded text-black outline-none w-48'/>
                <div className='relative'>
                    <button onClick={() => setCategoryOpen(!categoryOpen)} className='bg-gray-700 px-4 py-1 rounded flex items-center gap-2'>
                        Categories
                        <FaChevronDown className={`transition-transform duration-300 ${categoryOpen ? "rotate-180" : ""}`} />
                    </button>

                    {categoryOpen && (
                        <div className='absolute top-12 left-0 bg-black text-white rounded shadown-lg w-52 z-50'>
                            <button onClick={() => {
                                setCategory("all");
                                setCategoryOpen(false);
                            }} className='block w-full text-left px-4 py-2 hover:bg-gray-200 hover:text-black'>All</button>

                            <button onClick={() => {
                                setCategory("electronics");
                                setCategoryOpen(false);
                            }} className='block w-full text-left px-4 py-2 hover:bg-gray-200 hover:text-black'>Electronics</button>

                            <button onClick={() => {
                                setCategory("jewelery");
                                setCategoryOpen(false);
                            }} className='block w-full text-left px-4 py-2 hover:bg-gray-200 hover:text-black'>Jewelery</button>

                            <button onClick={() => {
                                setCategory("men's clothing");
                                setCategoryOpen(false);
                            }} className='block w-full text-left px-4 py-2 hover:bg-gray-200 hover:text-black'>Men's Clothing</button>

                            <button onClick={() => {
                                setCategory("women's clothing");
                                setCategoryOpen(false);
                            }} className='block w-full text-left px-4 py-2 hover:bg-gray-200 hover:text-black'>Woman's clothing</button>
                        </div>
                    )}
                </div>

                <select value={sortOptions} onChange={(e) => 
                        setSortOptions(e.target.value)
                    } className='text-black px-2 py-1 rounded'>
                        <option value="">Sort</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: high to low</option>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                </select>

                <Link to="/cart">Cart ({cartItems.length})</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>

            <div className='lg:hidden text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes/> : <FaBars/> }
            </div>
        </div>

        {menuOpen && (
            <div className='flex flex-col gap-4 mt-4 lg:hidden'>
                <input type="text" placeholder='Search products...' value={search} onChange={(e) => setSearch(e.target.value)} className='px-3 py-1 rounded text-black outline-none'/>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-center font-bold text-white text-2xl underline'>Categories</h2>
                    <button onClick={() => { setCategory("all"); setMenuOpen(false) }}>All</button>
                    <button onClick={() => {setCategory("electronics"); setMenuOpen(false)}}>Electronics</button>
                    <button onClick={() => { setCategory("jewelery"); setMenuOpen(false) }}>Jewelery</button>
                    <button onClick={() => { setCategory("men's clothing"); setMenuOpen(false)}}>Men's clothing</button>
                    <button onClick={() => { setCategory("women's clothing"); setMenuOpen(false)}}>Woman's clothing</button>
                </div>

                <div className='flex flex-col gap-2 mt-4'>
                    <h2 className='text-center font-bold text-white text-2xl underline'>
                        Sort
                    </h2>
                    <select value={sortOptions} onChange={(e) => {
                        setSortOptions(e.target.value);
                        setMenuOpen(false);
                    }} className='text-black px-3 py-2 rounded'>
                        <option value="">Sort Products</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                        <option value="a-z">A - Z</option>
                        <option value="z-a">Z - A</option>
                    </select>
                </div>
                <Link to='/' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to='/cart' onClick={() => setMenuOpen(false)}>Cart ({cartItems.length})</Link>
                <Link to='/login' onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to='/signup' onClick={() => setMenuOpen(false)}>Signup</Link>
            </div>
        )}
    </nav>
  )
}

export default Navbar