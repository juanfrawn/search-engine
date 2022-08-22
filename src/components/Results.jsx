import { useContext, useEffect } from "react"
import { useLocation } from "react-router-dom"

import { ResultContext } from "../contexts/ResultContextProvider"

import { Loading } from "./Loading"

export const Results = () => {
  const { getResults, results, isLoading, searchTerm } = useContext(ResultContext)
  const location = useLocation();

  useEffect(() => {
    if(searchTerm) {
      getResults(`${location.pathname}/q=${searchTerm}`)
      }
    }, [searchTerm, location.pathname]);

  if(isLoading) return <Loading />
  
  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 px-4 lg:px-10">
          {results?.map(({ link, title, description }, index) => (
            <div key={index} className="w-full mb-2">
              <a href={link} target="_blank" rel="noreferrer">
              <p className="text-sm text-gray-400 lg:text-md">
                  {JSON.stringify(link)}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700 lg:text-xl">
                  {title}
                </p>
                <p className="text-sm">
                  {description}
                </p>
              </a>
            </div>
          ))}
        </div>
      )
    case '/image':
      return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 justify-center items-center">
          {results?.map(({ image, link: {href, title }}, index) => (
            <a href={href} key={index} target="_blank" rel="noreferrer" className="sm:p-3 p-5">
              <img src={image?.src} alt={title} className="mx-auto" />
              <p className="text-xs text-center break-words mt-2">
                {title}
              </p>
            </a>
          ))}
        </div>
      )
    case '/news':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-4 lg:px-10 items-center">
          {
          results?.map(({ links, id, source, title, published }) => (
            <div key={title} className="w-full">
              <p className=" text-xs opacity-50">{published?.slice(0, 17)}</p>
              <a href={links?.[0].href} target="_blank" rel="noreferrer" className="hover:underline">
                <p className="text-lg dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
              <div className="flex gap-4">
                <a href={source?.href} className="text-sm text-gray-400" target="_blank" rel="noreferrer">
                  {source?.href}
                </a>
              </div>
            </div>
          ))}
        </div>
      )
    default:
      return ('No results')
  }
}
