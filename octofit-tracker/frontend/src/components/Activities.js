
import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setActivities(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-primary">Activities</h2>
        <button className="btn btn-success">Add Activity</button>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr><td colSpan="5" className="text-center">No activities found.</td></tr>
              ) : (
                activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{activity.name || '-'}</td>
                    <td>{activity.type || '-'}</td>
                    <td>{activity.date || '-'}</td>
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

export default Activities;
