import React from 'react'
import Applicant from "../components/admin/Applicant/Applicant"
import LisJob from "../components/admin/ListJob/Job"
import Navbar from '../components/admin/Navbar/Navbar'
import NewJob from "../components/admin/Newjob/Newjob"
import UpdatApplicant from '../components/admin/UpdateApplicant/UpdateApplicant'
import UpdateJob from "../components/admin/UpdateJob/UpdateJob"
import {
    Route,
    Routes
} from "react-router-dom";
const Admin = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route  path='/list' element={<LisJob />} />
                <Route path='/update' element={<UpdateJob/>} />
                <Route exact path='/applicant' element={<Applicant />} />
                <Route path='/updateapplicant' element={<UpdatApplicant />} />
                <Route path='/newjob' element={<NewJob />} />
            </Routes>
        </div>
    )
}

export default Admin