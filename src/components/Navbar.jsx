import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

import { Search } from './Search';

export const Navbar = ({ setDarkTheme,  darkTheme }) => {
  return (
    <div className="p-3 pb-0 mb-4 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-r-gray-200 lg:px-10">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">
                <img src={logo} alt="logo" className="w-24" />
            </Link>
            <button 
                type="button" 
                className='text-xl px-2 py-1 transition-transform duration-200 hover:scale-105'
                onClick={(() => setDarkTheme(!darkTheme))}>
                {darkTheme ? '☀️' : '🌙'}
            </button>
        </div>
            <Search />
    </div>
  )
}
