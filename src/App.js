import './App.css';
import React, {useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(jsonData=>setData(jsonData))
    .catch(error=>console.log("Error in fetching data"))
  }, []);

  return (
    <div>
      <h2 className='main-heading'>Data Table</h2>
      <table className='data-table'>
        <thead>
          <tr className='cols'>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return(
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
              )
            })}
          </tbody>
      </table>
    </div>
  
  );
}

export default App;
