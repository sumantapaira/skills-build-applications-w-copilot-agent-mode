
import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `${process.env.REACT_APP_CODESPACE_URL}/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setLeaderboard(data.results || data);
      });
  }, [endpoint]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold text-success">Leaderboard</h2>
        <button className="btn btn-info">Refresh</button>
      </div>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-success">
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">User</th>
                <th scope="col">Points</th>
                <th scope="col">Team</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.length === 0 ? (
                <tr><td colSpan="5" className="text-center">No leaderboard data found.</td></tr>
              ) : (
                leaderboard.map((entry, idx) => (
                  <tr key={entry.id || idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{entry.user || '-'}</td>
                    <td>{entry.points || '-'}</td>
                    <td>{entry.team || '-'}</td>
                    <td>
                      <button className="btn btn-primary btn-sm mx-1">View</button>
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

export default Leaderboard;
