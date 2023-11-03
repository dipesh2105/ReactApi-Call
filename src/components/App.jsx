import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Consuming API data</h1>
      <div className="container">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result, index) => (
              <tr key={index}>
                <td>{result.name.first}</td>
                <td>{result.location.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
