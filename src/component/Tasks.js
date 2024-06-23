// function Tasks() {

//     async function fetchData() {
//         try {
//         const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
//         if (!response.ok) {
//          throw new Error('Network response was not ok');
//        }
//        const data = await response.json();
//          console.log(data);
//      } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//  }
//     return (  
//         <div>
//         fetchData();
//         </div>
        
//     );
// }
// }

// export default Tasks;

// src/DataFetcher.js



// import React, { useState, useEffect } from 'react';

// const Tasks = () => {
//   // State to hold the data, loading state, and error state
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [todos, setTodos] = useState([]);

//   // useEffect hook to fetch data when the component mounts
//   useEffect(() => {
//     fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do') // Replace with your API endpoint
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setData(data); // Set the data to state
//         setLoading(false); // Set loading to false
//       })
//       .catch(error => {
//         setError(error); // Set error to state
//         setLoading(false); // Set loading to false
//       });
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   // Render logic
// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

//   return (
//     <div>
//       <h1>Tasks</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Created By</th>
//             <th>Priority</th>
//             <th>Todo</th>
//             <th>Completed</th>
//             <th>Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => (
//             <tr key={todo.id}>
//               <td>{todo.id}</td>
//               <td>{todo.createdBy}</td>
//               <td>{todo.priority}</td>
//               <td>{todo.todo}</td>
//               <td>{todo.completed ? 'Yes' : 'No'}</td>
//               <td>{new Date(todo.createdAt).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
     
//     </div>
//   );
// };

// export default Tasks;

// src/TodoTable.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import '../style/Tasks.css'
import Pagination from './Pagination';

const Tasks = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do'); // Replace with your actual URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8; // Assuming 10 total pages

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Perform actions based on the new page number (e.g., fetch data)
  };

  return (
    <div className='layout_container'>
     <h1>Todo List</h1> 
      <table className='container'>
        
      
      
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              {/* <td>{todo.id}</td> */}
              <td style={{ width: '2px' }}>
  {todo.priority === 'HIGH' ? (
    <FontAwesomeIcon icon={faBell} color="red" size='lg' /> // High priority
  ) : todo.priority === 'MEDIUM' ? (
    <FontAwesomeIcon icon={faBell} color="yellow" /> // Middle priority (adjust color as needed)
  ) : (
    <FontAwesomeIcon icon={faBell} color="blue" /> // Low priority (check mark for low)
  )}
</td>
              {/* <td>{todo.createdBy}</td>
              <td>{todo.priority}</td> */}
              <td style={{ width: '150px' }}>{todo.todo}</td>
              <td>{todo.completed ? <button style={{ backgroundColor: 'green', color: 'white' ,borderRadius:'10px'}}>Done</button> : <button style={{ backgroundColor: 'white', color: 'orange',borderRadius:'10px' }}>In-Progress</button>}</td>
              {/* <td>{new Date(todo.createdAt).toLocaleString()}</td> */}
              {/* <td>
        {new Date(todo.createdAt).toLocaleString('default', { month: 'long' })} 
        {' '} 
        {new Date(todo.createdAt).getDate()} 
       
      </td> */}
      <td>
        {new Date(todo.createdAt).toLocaleString('en-US', { month: 'short' })} {/* Short month name (e.g., Sep) */}
        {' '} {/* Add a space */}
        {new Date(todo.createdAt).getDate()} {/* Day of the month */}
        {/* Optionally include the year:  */}
        {/* ', {new Date(todo.createdAt).getFullYear()}' */}
      </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default Tasks;

