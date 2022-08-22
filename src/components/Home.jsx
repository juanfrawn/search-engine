import logo from '../img/logo.png';
import { useContext, useState } from 'react';
import {ResultContext} from '../contexts/ResultContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import search from '../img/search.svg'


export const Home = ({darkTheme, setDarkTheme}) => {
    const [text, setText] = useState('');
    const {handleText} = useContext(ResultContext);
    let navigate = useNavigate();

  return (
    <>
    <p 
                className='fixed bottom-10 right-10 text-xl px-2 py-1 transition-transform duration-200 hover:scale-105 cursor-pointer'
                onClick={(() => setDarkTheme(!darkTheme))}>
                {darkTheme ? '☀️' : '🌙'}
      </p>
    <div className='h-screen w-3/4 mx-auto grid grid-cols-1 place-content-center'>
      <div className='flex justify-center mb-6'>
      </div>
      <img src={logo} alt="logo" className='w-80 mx-auto' />
      <div className='relative w-full mt-3 sm:mt-4'>
        <form className='flex my-4 lg:w-2/5 lg:mx-auto text-lg' onSubmit={() => {
          handleText(text)
          navigate("/search", { replace: true });
        }}>
        <input 
          type="text" 
          onChange={(e) => setText(e.target.value)}
          placeholder='Search or type URL'
          className="w-full h-0 dark:bg-gray-900 dark:border-gray-700 dark:text-white border rounded-tl-2xl rounded-bl-2xl shadow-sm outline-none px-4 py-6  text-black hover:shadow-lg" />
        <Link to={'/search'} className='bg-blue-500 px-3 lg:px-5 rounded-tr-xl rounded-br-xl flex items-center'
          onClick={() => handleText(text)}>
            <img src={search} alt="Search" className='w-6' />
        </Link>
        </form>
      </div>
      </div>
      </>
  )
}
