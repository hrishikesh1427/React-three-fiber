// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import io from "socket.io-client";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Function to get color based on temperature
// function getColorForTemperature(temperature) {
//   if (temperature >= 100) {
//     return '#FF5733'; // Red
//   } else if (temperature >= 70 && temperature < 100) {
//     return '#FFA500'; // Orange
//   } else {
//     return '#33FF57'; // Green
//   }
// }

// const TuyereComponent = () => {
//   const { index } = useParams();
//   const tuyereIndex = parseInt(index, 10); // Convert index to an integer
//   const [temperatures, setTemperatures] = useState(Array.from({ length: 20 }, () => [50, 75, 105]));
//   const socketUrl = "http://192.168.0.102:5000/roi_temperature";
  
//   useEffect(() => {
//     console.log("Attempting to connect to server...");
//     const socket = io(socketUrl);
  
//     socket.on("connect", () => {
//       console.log('Connected to server');
//     });
  
//     socket.on("roi_temperature", (data) => {
//       console.log("Received data from socket:", data);
//       if (data && data['tuyere_name'] && data['top'] !== undefined && data['mid'] !== undefined && data['bot'] !== undefined) {
//         let tuyere_id = parseInt(data['tuyere_name'].substring(7), 10);
//         let top = data['top'];
//         let mid = data['mid'];
//         let bot = data['bot'];
//         let data_array = [top, mid, bot];
    
//         setTemperatures(prevTemperatures => {
//           let newTemperatures = [...prevTemperatures];
//           newTemperatures[tuyere_id - 1] = data_array;
//           console.log("Updated temperatures:", newTemperatures);
//           return newTemperatures;
//         });
//       } else {
//         console.error("Data format error");
//       }
//     });
  
//     socket.on("error", (error) => {
//       console.error("Socket error:", error);
//       // Implement user notification or retry logic here
//     });

//     return () => {
//       console.log("Disconnecting from server...");
//       socket.disconnect();
//     };
//   }, [socketUrl]); // Added socketUrl as a dependency

//   // Render the details of the tuyere based on the index in the URL parameter
//   const tuyereDetails = temperatures[tuyereIndex - 1] || [];
  
//   // Data for the bar graph
//   const data = {
//     labels: ['Bot', 'Mid', 'Top'],
//     datasets: [{
//       label: `Tuyere ${index} Temperatures`,
//       data: tuyereDetails,
//       backgroundColor: [
//         getColorForTemperature(tuyereDetails[2]), // Bot
//         getColorForTemperature(tuyereDetails[1]), // Mid
//         getColorForTemperature(tuyereDetails[0]), // Top
//       ],
//       borderColor: [
//         'rgba(255, 255, 255, 1)',
//         'rgba(255, 255, 255, 1)',
//         'rgba(255, 255, 255, 1)',
//       ],
//       borderWidth: 1
//     }]
//   };

//   // Chart options
//   const options = {
//     scales: {
//       y: {
//         type: 'linear',
//         beginAtZero: true
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Tuyere {index} Details</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// };

// export default TuyereComponent;
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import io from "socket.io-client";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Function to get color based on temperature
// function getColorForTemperature(temperature) {
//   if (temperature >= 100) {
//     return '#FF5733'; // Red
//   } else if (temperature >= 70 && temperature < 100) {
//     return '#FFA500'; // Orange
//   } else {
//     return '#33FF57'; // Green
//   }
// }

// const TuyereComponent = () => {
//   const { index } = useParams();
//   const tuyereIndex = parseInt(index, 10);
//   const [temperatures, setTemperatures] = useState(Array.from({ length: 20 }, () => [50, 75, 105]));
//   const socketUrl = "http://192.168.0.102:5000/roi_temperature";
  
//   useEffect(() => {
//     console.log("Attempting to connect to server...");
//     const socket = io(socketUrl);
  
//     socket.on("connect", () => {
//       console.log('Connected to server');
//     });
  
//     socket.on("roi_temperature", (data) => {
//       console.log("Received data from socket:", data);
//       if (data && data['tuyere_name'] && data['top'] !== undefined && data['mid'] !== undefined && data['bot'] !== undefined) {
//         let tuyere_id = parseInt(data['tuyere_name'].substring(7), 10);
//         let top = data['top'];
//         let mid = data['mid'];
//         let bot = data['bot'];
//         let data_array = [top, mid, bot];
      
//         setTemperatures(prevTemperatures => {
//           let newTemperatures = [...prevTemperatures];
//           newTemperatures[tuyere_id - 1] = data_array;
//           console.log("Updated temperatures for Tuyere", tuyere_id, ":", newTemperatures);
//           return newTemperatures;
//         });
//       } else {
//         console.error("Data format error");
//       }
//     });
  
//     socket.on("error", (error) => {
//       console.error("Socket error:", error);
//     });

//     return () => {
//       console.log("Disconnecting from server...");
//       socket.disconnect();
//     };
//   }, [socketUrl, tuyereIndex]);

//   // Render the details of the tuyere based on the index in the URL parameter
//   const tuyereDetails = temperatures[tuyereIndex] || [];
  
//   // Data for the bar graph
//   const data = {
//     labels: ['Bot', 'Mid', 'Top'],
//     datasets: [{
//       label: `Tuyere ${tuyereIndex + 1} Temperatures`,
//       data: tuyereDetails,
//       backgroundColor: [
//         getColorForTemperature(tuyereDetails[2]), // Bot
//         getColorForTemperature(tuyereDetails[1]), // Mid
//         getColorForTemperature(tuyereDetails[0]), // Top
//       ],
//       borderColor: 'rgba(255, 255, 255, 1)',
//       borderWidth: 1
//     }]
//   };

//   // Chart options
//   const options = {
//     scales: {
//       y: {
//         type: 'linear',
//         beginAtZero: true
//       }
//     }
//   };

//   return (
//     <div style={{backgroundColor:"grey", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
//       <div style={{ padding: '50px', backgroundColor: '#2c2c2c', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '80%', maxWidth: '800px', margin: '20px' }}>
//         <h2 style={{ color: '#ffffff' }}>Tuyere {tuyereIndex + 1} Details</h2>
//         <div style={{ marginTop: '20px' }}>
//           <Bar data={data} options={options} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TuyereComponent;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Center } from "@react-three/drei";

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Function to get color based on temperature
function getColorForTemperature(temperature) {
  if (temperature >= 100) {
    return '#FF5733'; // Red
  } else if (temperature >= 70 && temperature < 100) {
    return '#FFA500'; // Orange
  } else {
    return '#33FF57'; // Green
  }
}

const TuyereComponent = () => {
  const { index } = useParams();
  const tuyereIndex = parseInt(index, 10);
  const [temperatures, setTemperatures] = useState(Array.from({ length: 20 }, () => [50, 75, 105]));
  const socketUrl = "http://192.168.0.102:5000/roi_temperature";
  
  useEffect(() => {
    console.log("Attempting to connect to server...");
    const socket = io(socketUrl);
  
    socket.on("connect", () => {
      console.log('Connected to server');
    });
  
    socket.on("roi_temperature", (data) => {
      console.log("Received data from socket:", data);
      if (data && data['tuyere_name'] && data['top'] !== undefined && data['mid'] !== undefined && data['bot'] !== undefined) {
        let tuyere_id = parseInt(data['tuyere_name'].substring(7), 10);
        let top = data['top'];
        let mid = data['mid'];
        let bot = data['bot'];
        let data_array = [top, mid, bot];
      
        setTemperatures(prevTemperatures => {
          let newTemperatures = [...prevTemperatures];
          newTemperatures[tuyere_id - 1] = data_array;
          console.log("Updated temperatures for Tuyere", tuyere_id, ":", newTemperatures);
          return newTemperatures;
        });
      } else {
        console.error("Data format error");
      }
    });
  
    socket.on("error", (error) => {
      console.error("Socket error:", error);
    });

    return () => {
      console.log("Disconnecting from server...");
      socket.disconnect();
    };
  }, [socketUrl, tuyereIndex]);

  // Render the details of the tuyere based on the index in the URL parameter
  const tuyereDetails = temperatures[tuyereIndex] || [];
  
  // Data for the bar graph
  const data = {
    labels: ['Bot', 'Mid', 'Top'],
    datasets: [{
      label: `Tuyere ${tuyereIndex + 1} Temperatures`,
      data: tuyereDetails,
      backgroundColor: [
        getColorForTemperature(tuyereDetails[2]), // Bot
        getColorForTemperature(tuyereDetails[1]), // Mid
        getColorForTemperature(tuyereDetails[0]), // Top
      ],
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1
    }]
  };

  // Chart options
  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        ticks: {
          color: 'white' // Set y axis text color
        }
      },
      x: {
        ticks: {
          color: 'white' // Set x axis text color
        }
      }
    },
    plugins: {
      title: {
        display: true,
        color: 'white', // Set title color
        text: `Tuyere ${tuyereIndex + 1} Details`,
        fontSize: 20 // Set title font size

      },
      legend: {
        labels: {
          color: 'white' // Set legend label color
        }
      }
    }
  };

  return (
    <div style={{backgroundColor:"#1e1e1e", display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px'}}>
      <div style={{ width: '70%', marginRight: '20px' }}>
        <div style={{ padding: '20px', backgroundColor: '#2e2e2e', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', marginBottom: '20px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
      <div style={{ width: '30%' }}>
        <div style={{ padding: '20px', backgroundColor: '#424242', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <h3 style={{ color: '#ffffff', textAlign: 'center', marginBottom: '20px' }}>Temperature Details</h3>
          <div style={{ color: '#ffffff' }}>
            <p><strong>Top:</strong> {tuyereDetails[0]}</p>
            <p><strong>Mid:</strong> {tuyereDetails[1]}</p>
            <p><strong>Bot:</strong> {tuyereDetails[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuyereComponent;
