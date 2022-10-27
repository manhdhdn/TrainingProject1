import React from 'react'
import Header from '../components/user/Header/Header'
import Main from '../components/user/Main/Main'
import Job from "../components/user/Job/Job"
import Footer from "../components/user/Footer/Footer"
import Detail from "../components/user/Job/Details"
import Apply from "../components/user/Apply/Apply"
import {
    Route,
    Routes
} from "react-router-dom";
const Home = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route exact path='/job' element = {<Job/>}/>
                <Route exact path='/detail' element = {<Detail/>}/>
                <Route exact path='/apply' element = {<Apply/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default Home