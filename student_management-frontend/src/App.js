import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EditStudentForm from './components/EditStudentForm';


function App() {
// const initialStudents=[
//   {name:"Deepak Kumar", age:24,class:7},
//   {name:"Hari Kumar", age:24,class:7},
//   {name:"Mohan Kumar", age:24,class:7}
// ]
const[initialStudents,setInitialStudents]=useState([])




const fetchStudents = async () => {
  try {
    let response = await fetch("http://localhost:5000/get/students");
    let result = await response.json();
    setInitialStudents(result);
  } catch (error) {
    console.error("Failed to fetch students:", error);
  }
};
useEffect(() => {
  fetchStudents(); 
}, []); 


const postStudent = async (item) => {
  try {
    let result = await fetch("http://localhost:5000/post/students", {
      method: "POST",
      body: JSON.stringify(item), 
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      console.log("Student added successfully");
    } else {
      console.log("Failed to add student");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  fetchStudents()
  
};

const deleteStudent=async(id)=>{
  let result=await fetch(`http://localhost:5000/delete/students/${id}` ,{
    method: "delete"
  })
  fetchStudents()
}


const editStudent = async (updatedStudent) => {
  try {
    let result = await fetch(`http://localhost:5000/edit/students/${updatedStudent.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedStudent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      console.log("Student updated successfully");
    } else {
      console.log("Failed to update student");
    }
  } catch (error) {
    console.error("Error:", error);
  }
  fetchStudents();
};

  return (
   <>
   <BrowserRouter>
   <Header/>
  
   <Routes>
   <Route path='/' element={<StudentList initialStudents={initialStudents}  deleteStudent={deleteStudent}/>}/>
    <Route path='/addStudent' element={<StudentForm postStudent={postStudent}/>}/>
    <Route path='/editStudent/:id' element={<EditStudentForm  editStudent={editStudent} initialStudents={initialStudents}/>}/>
  </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
