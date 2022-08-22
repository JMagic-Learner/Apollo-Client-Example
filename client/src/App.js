import logo from './logo.svg';
import './App.css';

// NODE PACKAGES
import {  BrowserRouter, Routes, Route} from 'react-router-dom';

// COMPONENTS

import Navigation from './Components/Navigation'

// PAGES

import Explanation from './Pages/Explanation';
import Dependency from './Pages/Dependency';
import Demonstration from './Components/Demonstration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
            <Route exact path="/" element={<Demonstration/>}/>
            <Route exact path="/explanation" element={<Explanation />}/>
            <Route exact path="/dependency" element={<Dependency/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
