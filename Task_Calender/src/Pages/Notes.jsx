import React from 'react'
import { useParams } from 'react-router-dom'

const Notes = () => {
    const {Date} = useParams()
    console.log("date",date)

  return (
    <div>notes {Date}</div>
  )
}

export default Notes