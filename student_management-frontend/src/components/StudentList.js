import React from "react";
import { Link } from "react-router-dom";

export default function StudentList({ initialStudents,deleteStudent,setStudentToEdit }) {

  const handleDeleteStudent=(id)=>{
    console.log(id);
    
    deleteStudent(id)
  }

  return (
    <div className="container text-center" style={{ marginTop: "40px" }}>
        <div className="alert alert-info" role="alert">
        <div className="row"> 
        <div className="col">Name</div>
        <div className="col">Age</div>
        <div className="col">className</div>
        <div className="col">Action</div>
        <div className="col">Action</div>
      </div>
</div>
      
      {initialStudents.map((student) => (
        <div className="row shadow-sm p-3 my-3" key={student.id}>
          <div className="col">{student.name}</div>
          <div className="col">{student.age}</div>
          <div className="col">{student.classSection}</div>
          <div className="col"><Link to={`/editStudent/${student.id}`}><button type="button" className="btn btn-secondary" >Edit</button></Link></div>
          <div className="col"><button type="button" className="btn btn-danger" onClick={()=>handleDeleteStudent(student.id)}>Delete</button></div>
        </div>
      ))}
    </div>
  );
}
