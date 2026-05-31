import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({data}) => {
    const [task, setTask] = useState([])

    function savetoLocal(t){
        localStorage.setItem('B81Task',JSON.stringify(t))
    }

    function getFromLocal(){
        return JSON.parse(localStorage.getItem('B81Task'))
    }

    async function fetctData(){
        const getDataFromLocal = getFromLocal()

        if(getDataFromLocal){
            setTask(getDataFromLocal)
        }
        else{
            setTask(data)
            savetoLocal(data)
        }
    }

    useEffect(()=>{
        fetctData()
    },[])

    function deletTask(id){
        console.log(id)
        
        const tasks = getFromLocal()
        const index = tasks.findIndex((e)=> e.id == id)
        console.log(index)

        tasks.splice(index,1)

        localStorage.setItem("B81Task", JSON.stringify(tasks))
        fetctData()
    }


  return (
    <>
        <div className="container align-right">
            <Link className='btn btn-primary' to='/create'>Add New Task</Link>
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {task.map((t, i) => (
                        <tr key={t.id}>
                            <th scope="row">{i+1}</th>
                            <td>{t.title}</td>
                            <td>{t.description}</td>
                            <td className={`${t.isComplete ? 'text-success' : 'text-info'}`}>{t.isComplete ? "Completed" : "In progress"}</td>
                            <td>
                                <Link className='btn btn-success' to={`/edit/${t.id}`}>Edit</Link>
                                <button className='btn btn-danger' onClick={()=>{console.log("delete clicked")
                                  deletTask(t.id)
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
  )
}

export default HomePage