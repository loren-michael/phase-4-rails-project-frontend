import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      Hello World!
    <Routes>
      <Route path={'/movies'} />
      <Route path={'/stores'} />
      <Route path={'/rentals'} />
      <Route path={'/'} />
    </Routes>
    </div>
  )

}

export default App;