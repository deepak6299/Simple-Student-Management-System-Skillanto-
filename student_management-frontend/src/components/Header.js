import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Student Management System</span>
        </a>
        <Link to="/addStudent">
        
          <button type="button" className="btn btn-primary">
            Add new student
          </button>
        </Link>
      </header>
    </div>
  );
}
