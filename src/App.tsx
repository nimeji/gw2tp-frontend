import React from 'react';
import './App.css';
import Secured from "./pages/Secured";
import Welcome from "./pages/Welcome";
import Backend from "./pages/Backend";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div>
            <div>test</div>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/secured">Secured</Link>
                            </li>
                            <li>
                                <Link to="/backend">Backend</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Welcome />} />
                        <Route path="/secured" element={<Secured />} />
                        <Route path="/backend" element={<Backend />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
