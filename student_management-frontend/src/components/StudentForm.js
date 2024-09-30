import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function StudentForm({postStudent}) {
  // defining state for handle each input
  const[name,setName]=useState(" ")
  const[age,setAge]=useState(" ")
  const[classSection,setClassSection]=useState(" ")

  const navigate=useNavigate()
 
    const handleNewStudent = (e) => {
      e.preventDefault();
 console.log({name,age,classSection});
 postStudent({ name, age, classSection })
 navigate("/")
 
    setName("")
    setAge("")
    setClassSection("")
    };
  

  return (
    <form style={{width:"40%",margin:"auto",padding:"20px 40px"}} className='shadow ' onSubmit={handleNewStudent}>
      <h2 className='text-center'>Add new student</h2>
    <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="text" className="form-control"  onChange={(e)=>setName(e.target.value)} required/>
    
    </div>
    <div className="mb-3">
      <label  className="form-label">Age</label> 
      <input type="text" className="form-control"  onChange={(e)=>setAge(e.target.value)} required/>
    </div>
    <div className="mb-3">
      <label  className="form-label">Class Section</label>
      <input type="text" className="form-control"  onChange={(e)=>setClassSection(e.target.value)} required/>
    </div>
    
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}
