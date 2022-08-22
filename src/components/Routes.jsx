import { Routes, Route,   } from 'react-router-dom';
import { Navbar } from "./Navbar";
import { Home } from "./Home";

import { Results } from './Results';

export const Routers = ({ darkTheme, setDarkTheme}) => {
  return (
        <Routes>
            <Route path="/" element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />} />
            <Route path={'/search'} element={[<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />, <Results />]} />
            <Route path={'/image'} element={[<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />, <Results />]} />
            <Route path={'/news'} element={[<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />, <Results />]} />
        </Routes>
  )
}
