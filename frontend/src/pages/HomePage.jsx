import React from 'react'
import { Link } from 'react-router-dom'
import ScheduleImg from '../img/schedule.jpeg'

function HomePage() {
  return (
    <>

<div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src={ScheduleImg} alt="" width="72" height="57"/>
    <h1 className="display-5 fw-bold">Schedule Manager</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Keep track of all your employee schedules.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/login" type="button" className="btn btn-primary btn-lg px-4 gap-3">Create Schedules</Link>
        <Link to="/logout" type="button" className="btn btn-outline-secondary btn-lg px-4">Register</Link>
      </div>
    </div>
  </div>
    </>
  )
}

export default HomePage