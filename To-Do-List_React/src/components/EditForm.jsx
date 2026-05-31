
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {

  const {ID} = useParams()
    const [Task, setTask] = useState()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isComplete, setIsComplete] = useState()
    const navigate = useNavigate()



    function getFromLocal() {
        return JSON.parse(localStorage.getItem("B81Task"))
    }

    function fetchTask() {
        const tasks = getFromLocal()
        const TASK = tasks.find((t) => t.id == ID)
        setTask(TASK)
        setTitle(TASK.title)
        setDescription(TASK.description)
        setIsComplete(TASK.isComplete)

        // console.log(TASK.isComplete)
    }
    useEffect(() => {
        fetchTask()
    }, [])

    function handleFormUpdate(e) {
        e.preventDefault()
        const tasks = getFromLocal()
        const index = tasks.findIndex((t) => t.id == ID)
        if (index == -1) {
            alert("Task not found")
        } else {
            tasks[index].title = title,
            tasks[index].description = description
            tasks[index].isComplete = isComplete
            localStorage.setItem("B81Task", JSON.stringify(tasks))
        }
        navigate('/')
    }


  return (
    <div>
      <form
        onSubmit={handleFormUpdate}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputtitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleInputtitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDesci" className="form-label">Description</label>
          <input type="text" className="form-control" id="exampleInputDesci"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor='status' className='form-label'>Status</label>
          <select id='status' className='form-control' value={isComplete ? "Completed" : "In progress" } onChange={(e)=> setIsComplete(e.target.value === "Completed")}>
            <option value="Completed">Completed</option>
            <option value="In progress">In progress</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default EditForm