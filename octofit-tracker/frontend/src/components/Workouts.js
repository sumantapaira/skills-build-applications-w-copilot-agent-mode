
import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setWorkouts(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-danger">Workouts</h2>
        <button className="btn btn-success">Add Workout</button>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-danger">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Workout Name</th>
                <th scope="col">Type</th>
                <th scope="col">Duration</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {workouts.length === 0 ? (
                <tr><td colSpan="5" className="text-center">No workouts found.</td></tr>
              ) : (
                workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{workout.name || '-'}</td>
                    <td>{workout.type || '-'}</td>
                    <td>{workout.duration || '-'}</td>
                    <td>
                      <button className="btn btn-primary btn-sm mx-1">View</button>
                      <button className="btn btn-warning btn-sm mx-1">Edit</button>
                      <button className="btn btn-danger btn-sm mx-1">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
