// import React, { useState, useEffect } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// function Piecharttt() {
//     const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do'); // Replace with your actual URL
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const apiData = await response.json();

//         // Process API data to prepare chart data
//         const processedData = processApiData(apiData); // Define processApiData function below

//         setData(processedData);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const processApiData = (apiData) => {
//     // Extract priority data from the API response and calculate counts for each priority
//     const priorityCounts = {
//       High: 0,
//       Medium: 0,
//       Low: 0,
//     };

//     apiData.forEach((todo) => {
//       priorityCounts[todo.priority]++;
//     });

//     // Convert priority counts into chart data format
//     const chartData = Object.keys(priorityCounts).map((priority) => ({
//       name: priority,
//       value: priorityCounts[priority],
//     }));

//     return chartData;
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//     return ( 
//         <ResponsiveContainer width="100%" height={400}>
//       <PieChart width={800} height={400}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//      );
// }

// export default Piecharttt;

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import '../style/Piechart.css';
const COLORS = ['#de004e', '#ffdb00 ', '#223ba1'];

function Piecharttt() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do'); // Replace with your actual URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiData = await response.json();

        const processedData = processApiData(apiData);
        setData(processedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const processApiData = (apiData) => {
    // Extract priority data based on your actual API structure
    const priorityCounts = {
      HIGH: 0,
      MEDIUM: 0,
      LOW: 0,
    };

    apiData.forEach((todo) => {
      // Check for priority property at the top level
      if (todo.hasOwnProperty('priority')) {
        priorityCounts[todo.priority]++;
        return; // Exit if priority found at top level
      }

      // Handle nested priority structure (example: priority within "attributes")
      if (todo.attributes && todo.attributes.hasOwnProperty('priority')) {
        priorityCounts[todo.attributes.priority]++;
        return; // Exit if priority found in attributes
      }

      // Handle alternative property names (example: "importance" instead of "priority")
      if (todo.hasOwnProperty('importance')) {
        priorityCounts[todo.importance]++;
        return; // Exit if importance found
      }

      // Handle other potential structures as needed

      // If none of the above conditions match, consider it a todo without priority
      console.warn('Todo item without a priority found:', todo);
    });

    // Convert priority counts into chart data format
    const chartData = Object.keys(priorityCounts).map((priority) => ({
      name: priority,
      value: priorityCounts[priority],
    }));

    return chartData;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='layout_container'>
      
    <ResponsiveContainer width="100%" height={400}>
    <div>
    
      <PieChart width={800} height={400}>

        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

       
      </PieChart>
     
    </div>
      


     
    </ResponsiveContainer>
    
      
    

 

    </div>

  );
}

export default Piecharttt;
