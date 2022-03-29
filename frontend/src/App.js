import './App.css';
import Home from "./Pages/Home"
import About from "./Pages/About"
import Upload from "./Pages/Upload"
import ErrorPage from "./Pages/ErrorPage"
import Navbar from "./Pages/Navbar"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
    return (
        <div className="app">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/"  element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/upload" element={<Upload/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
