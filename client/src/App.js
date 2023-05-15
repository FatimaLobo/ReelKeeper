import React, { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import styles from "./style/Background.module.css"
import './style/App.css';

import Home from './pages/Home';
import ViewMovies from './pages/ViewMovies';
import Login from './pages/Login';
import Playground from "./pages/Playground";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";


const App = () => {
    useEffect(() => {
        return () => {
            document.body.className = styles.plainBackground;
        }
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/* Public routes */}
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                {/* Protected routes */}
                <Route element={<PersistLogin />}>
                    <Route path="/" element={<Home />} />
                    <Route element={<RequireAuth />}>
                        <Route path="/movies" element={<ViewMovies />} />
                        <Route path='/playground' element={<Playground />} />
                        {/* ... */}
                    </Route>
                </Route>

                {/* All routes */}
                <Route path='*' element={<Missing />} />
            </Route>
        </Routes>
    )
}
export default App;
