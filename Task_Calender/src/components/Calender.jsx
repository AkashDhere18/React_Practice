import React, { useState } from 'react'
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css";

const Calender = () => {
    const [date, setDate] = useState(new Date())

  return (
    <>
    <h1>Calendar</h1>
    <h2 className ="btn btn-primary">Create +</h2>
    <div className='container w-50'>
        <h2>Selected Date: {date.toDateString()}</h2>
        <Calendar onChange={setDate} value={date}/>
    </div>
    </>
  )
}

export default Calender