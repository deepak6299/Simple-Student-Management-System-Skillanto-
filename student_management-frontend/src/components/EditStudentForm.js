import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditStudentForm({ initialStudents, editStudent }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentToEdit = initialStudents.find(
    (student) => student.id === parseInt(id)
  );

  const [name, setName] = useState(studentToEdit?.name || '');
  const [age, setAge] = useState(studentToEdit?.age || '');
  const [classSection, setClassSection] = useState(studentToEdit?.classSection || '');

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setAge(studentToEdit.age);
      setClassSection(studentToEdit.classSection);
    }
  }, [studentToEdit]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { id: parseInt(id), name, age, classSection };
    editStudent(updatedStudent);
    navigate('/'); // Redirect back to student list after editing
  };

  return (
    <form style={{ width: '40%', margin: 'auto', padding: '20px 40px' }} className="shadow" onSubmit={handleEditSubmit}>
      <h2 className="text-center">Edit Student Details</h2>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          onChange={(e) => setAge(e.target.value)}
          required
          value={age}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Class Section</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setClassSection(e.target.value)}
          required
          value={classSection}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save Changes
      </button>
    </form>
  );
}
