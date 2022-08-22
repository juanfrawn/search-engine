import { useState } from "react";

import { Routers } from "./components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className=" overflow-hidden bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Routers darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </div>
    </div>
  );
}

export default App;
