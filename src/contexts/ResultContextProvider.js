import React, { useState, createContext } from 'react';

export const ResultContext = createContext();

const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Barcelona');
    const [text, setText] = useState('');
    
    const getResults = async (type) => {
        setIsLoading(true);

        const res = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
		        'X-Proxy-Location': 'EU',
		        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        })
        const data = await res.json()
        
        if(type.includes('/news')) {
            setResults(data.entries)
        } else if (type.includes('/image')) {
            setResults(data.image_results)
            console.log(data.image_results)
        } else if (type.includes('/search')) {
            setResults(data.results)
            console.log(data.results)
        }

        setIsLoading(false)
    }

    const handleText = (text) => {
        setSearchTerm(text)
        setText(text)
      }
    
    return (
        <ResultContext.Provider value={{
            handleText, getResults, results, isLoading, searchTerm, setSearchTerm, text, setText
        }}>
            {children}
        </ResultContext.Provider>
    )
}
