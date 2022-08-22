import { Links } from './Links';
import { useContext } from 'react';

import {ResultContext} from '../contexts/ResultContextProvider';
import search from '../img/search.svg'


export const Search = () => {
  const {text, setText, handleText, } = useContext(ResultContext);



  return (
    <div className='relative w-full mt-3 sm:mt-4'>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleText(text)
      }} className='flex my-4'>
      <input 
        type="text" 
        placeholder='Search or type URL'
        onChange={(e) => setText(e.target.value)}
        value={text} 
        className="w-full h-0 dark:bg-gray-900 dark:border-gray-700 dark:text-white border rounded-tl-2xl rounded-bl-2xl shadow-sm outline-none p-5 text-black hover:shadow-lg" />
      <div
        onClick={() => handleText(text)}
        className='bg-blue-500 flex items-center px-3 rounded-tr-xl rounded-br-xl'
        type='submit'>
          <img src={search} alt="Search" className='w-4' />
        </div>
        </form>
      <Links />
    </div>
  )
}