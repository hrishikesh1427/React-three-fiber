// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { Text } from "@react-three/drei";
// import { useNavigate } from "react-router-dom"; 

// import Navbar from "./Navbar";
// import "./App.css";

// // Define the temperature thresholds and corresponding colors
// const colors = {
//   red: "#FF5733",
//   orange: "#FFA500",
//   green: "#33FF57",
// };

// // Inside the App component
// function App() {
//   const positions = Array.from({ length: 20 }).map((_, index) => {
//     const angleIncrement = (Math.PI * 2) / 20;
//     const radius = 3.8;
//     const x = Math.cos(angleIncrement * index) * radius;
//     const z = Math.sin(angleIncrement * index) * radius;
//     return [x, 0, z];
//     // console.log(positions)
  
//   });
//   console.log(positions)
//   // Function to determine color based on temperature
//   function getColorForTemperature(temperature) {
//     if (temperature >= 100) {
//       return colors.red;
//     } else if (temperature >= 70 && temperature < 100) {
//       return colors.orange;
//     } else {
//       return colors.green;
//     }
//   }

//   // Dummy temperature values for demonstration
//   const temperatures = [
//     [70, 100, 10],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 10, 100],
//     [100, 70, 70],
//     [10, 100, 10],
//     [70, 70, 100],
//     [100, 10, 10],
//     [70, 100, 10],
//     [10, 70, 10],
//     [100, 10, 70],
//     [70, 100, 100],
//     [10, 10, 70],
//     [100, 70, 10],
//     [10, 100, 70],
//     [70, 10, 100],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 100, 10],
//     [10, 70, 100],
// ];

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#524C42",
//         borderRadius: "10px",
//       }}
//     >
//       <Navbar/>
//       <div
//         style={{
//           marginTop: "9%",
//           borderRadius: "10px",
//           width: "80%",
//           height: "60%",
//           backgroundColor: "#00001B",
//         }}
//       >
//        <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
//           <directionalLight position={[0, 0, 2]} />
//           <ambientLight intensity={0.35} />
//           <Group>
//             {positions.map((position, tuyereIndex) => (
//               <group key={tuyereIndex} position={position}>
//                 {temperatures[tuyereIndex].map((temperature, partIndex) => (
//                   <mesh key={partIndex} position={[0, partIndex * 1.01, 0]}>
//                     <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
//                     <meshStandardMaterial color={getColorForTemperature(temperature)} />
//                     {partIndex === 1 && (
//                       <Text position={[0, 0, 0.5]} fontSize={0.2} color="black">
//                         {tuyereIndex + 1}
//                       </Text>
//                     )}
//                   </mesh>
//                 ))}
//               </group>
//             ))}
//           </Group>
//         </Canvas>
//       </div>
//       <div style={{ borderRadius:"10px",marginTop: "25px" }} className="overlay">
//         <div style={{ color:"white", marginBottom:"5px",display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FF5733",
//             }}
//           ></div>
//           <span>Critical Temperature</span>
//         </div>
//         <div style={{  color:"white", marginBottom:"5px",display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FFA500",
//             }}
//           ></div>
//           <span>Moderate Temperature</span>
//         </div>
//         <div style={{color:"white",marginBottom:"5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#33FF57",
//             }}
//           ></div>
//           <span>Ideal Temperature</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Group({ children }) {
//   const [isMovementEnabled, setIsMovementEnabled] = useState(true);
//   const ref = useRef();
//   const rotationScale = 0.27; // Adjust this value to control the rotation speed
//   const modelScale = 1.45; // Increase this value to scale up the 3D models

//   useFrame(({ mouse }) => {
//     if (ref.current && ref.current.rotation && isMovementEnabled) {
//       ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
//       ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
//     }
//   });

//   const handleClick = () => {
//     setIsMovementEnabled((prev) => {
//       console.log(prev ? "Movement off" : "Movement on");
//       return !prev;
//     });
//   };

//   return (
//     <group
//       ref={ref}
//       onClick={handleClick}
//       scale={[modelScale, modelScale, modelScale]}
//     >
//       {children}
//     </group>
//   );
// }

// export default App;





















// //may code 
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { Text, Html } from "@react-three/drei";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
// import Navbar from "./Navbar";
// import "./App.css";

// const colors = {
//   red: "#FF5733",
//   orange: "#FFA500",
//   green: "#33FF57",
// };

// function App() {
//   const positions = Array.from({ length: 20 }).map((_, index) => {
//     const angleIncrement = (Math.PI * 2) / 20;
//     const radius = 3.8;
//     const x = Math.cos(angleIncrement * index) * radius;
//     const z = Math.sin(angleIncrement * index) * radius;
//     return [x, 0, z];
//   });

//   function getColorForTemperature(temperature) {
//     if (temperature >= 100) {
//       return colors.red;
//     } else if (temperature >= 70 && temperature < 100) {
//       return colors.orange;
//     } else {
//       return colors.green;
//     }
//   }

//   const temperatures = [
//     [70, 100, 10],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 10, 100],
//     [100, 70, 70],
//     [10, 100, 10],
//     [70, 70, 100],
//     [100, 10, 10],
//     [70, 100, 10],
//     [10, 70, 10],
//     [100, 10, 70],
//     [70, 100, 100],
//     [10, 10, 70],
//     [100, 70, 10],
//     [10, 100, 70],
//     [70, 10, 100],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 100, 10],
//     [10, 70, 100],
//   ];

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#524C42",
//         borderRadius: "10px",
//       }}
//     >
//       <Navbar />
//       <div
//         style={{
//           marginTop: "9%",
//           borderRadius: "10px",
//           width: "80%",
//           height: "60%",
//           backgroundColor: "#00001B",
//         }}
//       >
//         <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
//           <directionalLight position={[0, 0, 2]} />
//           <ambientLight intensity={0.35} />
//           <Group>
//             {positions.map((position, tuyereIndex) => (
//               <group key={tuyereIndex} position={position}>
//                 {temperatures[tuyereIndex].map((temperature, partIndex) => (
//                   <mesh key={partIndex} position={[0, partIndex * 1.01, 0]}>
//                     <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
//                     <meshStandardMaterial color={getColorForTemperature(temperature)} />
//                     {partIndex === 1 && (
//                       <Text position={[0, 0, 0.5]} fontSize={0.2} color="black">
//                         {tuyereIndex + 1}
//                       </Text>
//                     )}
//                   </mesh>
//                 ))}
//               </group>
//             ))}
//           </Group>
//         </Canvas>
//       </div>
//       <div style={{ borderRadius: "10px", marginTop: "25px" }} className="overlay">
//         <div
//           style={{
//             color: "white",
//             marginBottom: "5px",
//             display: "flex",
//             gap: "10px",
//           }}
//         >
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#FF5733" }}></div>
//           <span>Critical Temperature</span>
//         </div>
//         <div
//           style={{
//             color: "white",
//             marginBottom: "5px",
//             display: "flex",
//             gap: "10px",
//           }}
//         >
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#FFA500" }}></div>
//           <span>Moderate Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#33FF57" }}></div>
//           <span>Ideal Temperature</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Group({ children }) {
//   const ref = useRef();
//   const rotationScale = 0.27;
//   const modelScale = 1.45;

//   useFrame(({ mouse }) => {
//     if (ref.current && ref.current.rotation) {
//       ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
//       ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
//     }
//   });

//   return (
//     <group ref={ref} scale={[modelScale, modelScale, modelScale]}>
//       {children}
//     </group>
//   );
// }

// export default App;






// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef, useState } from "react";
// import { Text, Html } from "@react-three/drei";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
// import Navbar from "./Navbar";
// import "./App.css";

// const colors = {
//   red: "#FF5733",
//   orange: "#FFA500",
//   green: "#33FF57",
// };

// function App() {
  // const positions = Array.from({ length: 20 }, (_, index) => {
  //   const adjustedIndex = index + 1; // Start from 1
  //   const angleIncrement = (Math.PI * 2) / 20;
  //   const radius = 3.8;
  //   const x = Math.cos(angleIncrement * adjustedIndex) * radius;
  //   const z = Math.sin(angleIncrement * adjustedIndex) * radius;
  //   return [x, 0, z];
  // });
  // console.log(positions)
  // function getColorForTemperature(temperature) {
  //   if (temperature >= 100) {
  //     return colors.red;
  //   } else if (temperature >= 70 && temperature < 100) {
  //     return colors.orange;
  //   } else {
  //     return colors.green;
  //   }
  // }

//   const temperatures = [
//     [70, 100, 10],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 10, 100],
//     [100, 70, 70],
//     [10, 100, 10],
//     [70, 70, 100],
//     [100, 10, 10],
//     [70, 100, 10],
//     [10, 70, 10],
//     [100, 10, 70],
//     [70, 100, 100],
//     [10, 10, 70],
//     [100, 70, 10],
//     [10, 100, 70],
//     [70, 10, 100],
//     [10, 70, 100],
//     [100, 10, 70],
//     [70, 100, 10],
//     [10, 70, 100],
//   ];

//   const navigate = useNavigate(); // Access navigate for routing

//   const handleSelectChange = (event) => {
//     const selectedIndex = event.target.value; // Adjust the index
//     navigate(`/tuyere/${selectedIndex}`);
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#524C42",
//         borderRadius: "10px",
//       }}
//     >
//       {/* <Navbar /> */}
//       <div style={{ margin: "20px" }}>
//         <label htmlFor="tuyereSelect" style={{ color: "white" }}>Select Tuyere: </label>
//         <select id="tuyereSelect" onChange={handleSelectChange}>
//           {positions.map((_, index) => (
//             <option key={index} value={index}>
//               Tuyere {index+1}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div
//         style={{
//           marginTop: "9%",
//           borderRadius: "10px",
//           width: "80%",
//           height: "60%",
//           backgroundColor: "#00001B",
//         }}
//       >
//         <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
//           <directionalLight position={[0, 0, 2]} />
//           <ambientLight intensity={0.35} />
//           <Group>
//             {positions.map((position, tuyereIndex) => (
//               <group key={tuyereIndex} position={position}>
//                 {temperatures[tuyereIndex].map((temperature, partIndex) => (
//                   <mesh key={partIndex} position={[0, partIndex * 1.01, 0]}>
//                     <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
//                     <meshStandardMaterial color={getColorForTemperature(temperature)} />
//                     {partIndex === 1 && (
//                       <Text position={[0, 0, 0.5]} fontSize={0.2} color="black">
//                         {tuyereIndex + 1}
//                       </Text>
//                     )}
//                   </mesh>
//                 ))}
//               </group>
//             ))}
//           </Group>
//         </Canvas>
//       </div>
//       <div style={{ borderRadius: "10px", marginTop: "25px" }} className="overlay">
//         <div
//           style={{
//             color: "white",
//             marginBottom: "5px",
//             display: "flex",
//             gap: "10px",
//           }}
//         >
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#FF5733" }}></div>
//           <span>Critical Temperature</span>
//         </div>
//         <div
//           style={{
//             color: "white",
//             marginBottom: "5px",
//             display: "flex",
//             gap: "10px",
//           }}
//         >
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#FFA500" }}></div>
//           <span>Moderate Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div style={{ width: "30px", height: "30px", backgroundColor: "#33FF57" }}></div>
//           <span>Ideal Temperature</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Group({ children }) {
//   const ref = useRef();
//   const rotationScale = 0.27;
//   const modelScale = 1.45;

//   useFrame(({ mouse }) => {
//     if (ref.current && ref.current.rotation) {
//       ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
//       ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
//     }
//   });

//   return (
//     <group ref={ref} scale={[modelScale, modelScale, modelScale]}>
//       {children}
//     </group>
//   );
// }

// export default App;






// import React, { useEffect, useState } from "react";
// import io from 'socket.io-client';
// import { Canvas } from "@react-three/fiber";
// import { Text } from "@react-three/drei";
// import Navbar from "./Navbar";
// import "./App.css";

// const colors = {
//   red: "#FF5733",
//   orange: "#FFA500",
//   green: "#33FF57",
// };

// function App() {
//   const [temperatures, setTemperatures] = useState([]);

//   useEffect(() => {
//     console.log("Attempting to connect to server...");
//     const socket = io("http://192.168.0.102:5000/roi_temperature"); // Adjust URL accordingly
  
//     socket.on("connect", () => {
//       console.log('Connected to server');
//     });
  
//     // Event listener for 'roi_temperature' event
//     socket.on("roi_temperature", (data) => {
//       // Extract 'top', 'mid', and 'bot' values for each tuyere
//       // console.log("Received data from server:", data);
//       let tuyere_id = (parseInt(data['tuyere_name'].substring(7)));
//       let top = data['top'];
//       let mid = data['mid'];
//       let bot = data['bot'];
//       let data_array = [];
//       data_array.push(top);
//       data_array.push(mid);
//       data_array.push(bot);
//       temperatures[tuyere_id - 1] = data_array;
//       // console.log("temperatures:", temperatures);
//       // const newTemperatures = data.map(({ top, mid, bot }) => ({ top, mid, bot }));
//       // // Update the state with the extracted temperatures
//       // setTemperatures(newTemperatures);
//     });
//     socket.on("error", (error) => {
//       console.error("Socket error:", error);
//     });
//     return () => {
//       console.log("Disconnecting from server...");
//       socket.disconnect();
//     };
//   }, []);
  

//   // Function to determine color based on temperature
//   function getColorForTemperature(temperature) {
//     console.log(temperatures);
//     if (temperature >= 100) {
//       return colors.red;
//     } else if (temperature >= 70 && temperature < 100) {
//       return colors.orange;
//     } else {
//       return colors.green;
//     }
//   }


// console.log(temperatures)
//   // Calculate positions based on tuyere count only if temperatures are available
//   const positions = temperatures.length > 0 ? Array.from({ length: 20 }).map((_, index) => {
//     const angleIncrement = (Math.PI * 2) / 20;
//     const radius = 3.8;
//     const x = Math.cos(angleIncrement * index) * radius;
//     const z = Math.sin(angleIncrement * index) * radius;
//     return [x, 0, z];
//     console.log(positions)
//   }) : [];
//   console.log(positions)
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#524C42",
//         borderRadius: "10px",
//       }}
//     >
//       <Navbar />
//       <div
//         style={{
//           marginTop: "9%",
//           borderRadius: "10px",
//           width: "80%",
//           height: "60%",
//           backgroundColor: "#EEEEEE",
//         }}
//       >
//         <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
//           <directionalLight position={[0, 0, 2]} />
//           <ambientLight intensity={0.35} />
//           <Group>
//             {positions.map((position, tuyereIndex) => (
//               <group key={tuyereIndex} position={position}>
//                 <mesh position={[0, 0, 0]}>
//                   <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
//                   <meshStandardMaterial color={getColorForTemperature(temperatures[tuyereIndex]?.mid)} />
//                 </mesh>
//                 <Text position={[0, 0, 1]} fontSize={0.2} color="black">
//                   {tuyereIndex + 1}
//                 </Text>
//               </group>
//             ))}
//           </Group>
//         </Canvas>
//       </div>
//       <div style={{ borderRadius: "10px", marginTop: "25px" }} className="overlay">
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FF5733",
//             }}
//           ></div>
//           <span>Critical Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FFA500",
//             }}
//           ></div>
//           <span>Moderate Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#33FF57",
//             }}
//           ></div>
//           <span>Ideal Temperature</span>
//         </div>
//       </div>
//     </div>
//   );
// }







// function Group({ children }) {
//   const [isMovementEnabled, setIsMovementEnabled] = useState(true);
//   const ref = useRef();
//   const rotationScale = 0.27; // Adjust this value to control the rotation speed
//   const modelScale = 1.45; // Increase this value to scale up the 3D models

//   useFrame(({ mouse }) => {
//     if (ref.current && ref.current.rotation && isMovementEnabled) {
//       ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
//       ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
//     }
//   });

//   const handleClick = () => {
//     setIsMovementEnabled((prev) => {
//       console.log(prev ? "Movement off" : "Movement on");
//       return !prev;
//     });
//   };

//   return (
//     <group
//       ref={ref}
//       onClick={handleClick}
//       scale={[modelScale, modelScale, modelScale]}
//     >
//       {children}
//     </group>
//   );
// }

// export default App;




// import React, { useEffect, useState , useRef} from "react";
// import io from 'socket.io-client';
// import { Canvas } from "@react-three/fiber";
// import { Text } from "@react-three/drei";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// import "./App.css";
// import { useFrame } from '@react-three/fiber';


// const colors = {
//   red: "#FF5733",
//   orange: "#FFA500",
//   green: "#33FF57",
// };

// function App() {
//   const navigate = useNavigate();
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
//         let tuyere_id = parseInt(data['tuyere_name'].substring(7));
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



//   const positions = Array.from({ length: 20 }, (_, index) => {
//     const adjustedIndex = index + 1; // Start from 1
//     const angleIncrement = (Math.PI * 2) / 20;
//     const radius = 3.8;
//     const x = Math.cos(angleIncrement * adjustedIndex) * radius;
//     const z = Math.sin(angleIncrement * adjustedIndex) * radius;
//     return [x, 0, z];
//   });
//   // console.log(positions)
//   function getColorForTemperature(temperature) {
//     if (temperature >= 100) {
//       return colors.red;
//     } else if (temperature >= 70 && temperature < 100) {
//       return colors.orange;
//     } else {
//       return colors.green;
//     }
//   }

//   const handleSelectChange = (event) => {
//         const selectedIndex = event.target.value; // Adjust the index
//         console.log(selectedIndex);
//         navigate(`/tuyere/${selectedIndex}`);
//       };

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "flex-start",
//         backgroundColor: "#b0b8ce",
        
//       }}
//     >
//       {/* <Navbar /> */}

//       <div style={{ margin: "20px" }}>
//         <label htmlFor="tuyereSelect" style={{ color: "white" }}>Select Tuyere: </label>
//          <select id="tuyereSelect" onChange={handleSelectChange}>
//           {positions.map((_, index) => (
//             <option key={index} value={index}>
//               Tuyere {index+1}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div
//         style={{
//           marginTop: "9%",
//           borderRadius: "10px",
//           width: "50%",
//           height: "80%",
//           backgroundColor: "#022954",
//         }}
//       >
//         <Canvas style={{  width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
//           <directionalLight position={[0, 0, 2]} />
//           <ambientLight intensity={0.35} />
//           <Group>
//             {positions.map((position, tuyereIndex) => (
//               <group key={tuyereIndex} position={position}>
//                 {temperatures[tuyereIndex] && temperatures[tuyereIndex].map((temperature, partIndex) => (
//                   <mesh key={partIndex} position={[0, partIndex * 1.01, 0]}>
//                     <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
//                     <meshStandardMaterial color={getColorForTemperature(temperature)} />
//                     {partIndex === 1 && (
//                       <Text position={[0, 0, 0.5]} fontSize={0.2} color="black">
//                         {tuyereIndex + 1}
//                       </Text>
//                     )}
//                   </mesh>
//                 ))}
//               </group>
//             ))}
//           </Group>
//         </Canvas>
//       </div>
//       <div style={{ borderRadius: "10px", marginTop: "25px" }} className="overlay">
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FF5733",
//             }}
//           ></div>
//           <span>Critical Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#FFA500",
//             }}
//           ></div>
//           <span>Moderate Temperature</span>
//         </div>
//         <div style={{ color: "white", marginBottom: "5px", display: "flex", gap: "10px" }}>
//           <div
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: "#33FF57",
//             }}
//           ></div>
//           <span>Ideal Temperature</span>
//         </div>
//       </div>
//     </div>
//   );
// }





// function Group({ children }) {
//   const [isMovementEnabled, setIsMovementEnabled] = useState(true);
//   const ref = useRef();
//   const rotationScale = 0.27; // Adjust this value to control the rotation speed
//   const modelScale = 1.45; // Increase this value to scale up the 3D models

//   useFrame(({ mouse }) => {
//     if (ref.current && ref.current.rotation && isMovementEnabled) {
//       ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
//       ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
//     }
//   });

//   const handleClick = () => {
//     setIsMovementEnabled((prev) => {
//       console.log(prev ? "Movement off" : "Movement on");
//       return !prev;
//     });
//   };

//   return (
//     <group
//       ref={ref}
//       onClick={handleClick}
//       scale={[modelScale, modelScale, modelScale]}
//     >
//       {children}
//     </group>
//   );
// }

// export default App;






import React, { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

import "./App.css";
import { useFrame } from '@react-three/fiber';

const colors = {
  red: "#FF5733",
  orange: "#FFA500",
  green: "#33FF57",
};

function App() {
  const navigate = useNavigate();
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
        let tuyere_id = parseInt(data['tuyere_name'].substring(7));
        let top = data['top'];
        let mid = data['mid'];
        let bot = data['bot'];
        let data_array = [top, mid, bot];

        setTemperatures(prevTemperatures => {
          let newTemperatures = [...prevTemperatures];
          newTemperatures[tuyere_id - 1] = data_array;
          console.log("Updated temperatures:", newTemperatures);
          return newTemperatures;
        });
      } else {
        console.error("Data format error");
      }
    });

    socket.on("error", (error) => {
      console.error("Socket error:", error);
      // Implement user notification or retry logic here
    });

    return () => {
      console.log("Disconnecting from server...");
      socket.disconnect();
    };
  }, [socketUrl]); // Added socketUrl as a dependency

  const positions = Array.from({ length: 20 }, (_, index) => {
    const adjustedIndex = index + 1; // Start from 1
    const angleIncrement = (Math.PI * 2) / 20;
    const radius = 3.8;
    const x = Math.cos(angleIncrement * adjustedIndex) * radius;
    const z = Math.sin(angleIncrement * adjustedIndex) * radius;
    return [x, 0, z];
  });

  function getColorForTemperature(temperature) {
    if (temperature >= 100) {
      return colors.red;
    } else if (temperature >= 70 && temperature < 100) {
      return colors.orange;
    } else {
      return colors.green;
    }
  }

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value; // Adjust the index
    console.log(selectedIndex);
    navigate(`/tuyere/${selectedIndex}`);
  };

  return (
    <div className="app-container">
      {/* <Navbar /> */}
      <div className="select-container">
        <label htmlFor="tuyereSelect" className="select-label">Select Tuyere: </label>
        <select id="tuyereSelect" onChange={handleSelectChange}>
          {positions.map((_, index) => (
            <option key={index} value={index}>
              Tuyere {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="canvas-container">
        <Canvas className="canvas" camera={{ position: [0, 5, 10] }}>
          <directionalLight position={[0, 0, 2]} />
          <ambientLight intensity={0.35} />
          <Group>
            {positions.map((position, tuyereIndex) => (
              <group key={tuyereIndex} position={position}>
                {temperatures[tuyereIndex] && temperatures[tuyereIndex].map((temperature, partIndex) => (
                  <mesh key={partIndex} position={[0, partIndex * 1.01, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 1, 32]} />
                    <meshStandardMaterial color={getColorForTemperature(temperature)} />
                    {partIndex === 1 && (
                      <Text position={[0, 0, 0.5]} fontSize={0.2} color="black">
                        {tuyereIndex + 1}
                      </Text>
                    )}
                  </mesh>
                ))}
              </group>
            ))}
          </Group>
        </Canvas>
      </div>
      <div className="legend-container">
        <div className="legend-item">
          <div className="color-box" style={{ backgroundColor: "#FF5733" }}></div>
          <span>Critical Temperature</span>
        </div>
        <div className="legend-item">
          <div className="color-box" style={{ backgroundColor: "#FFA500" }}></div>
          <span>Moderate Temperature</span>
        </div>
        <div className="legend-item">
          <div className="color-box" style={{ backgroundColor: "#33FF57" }}></div>
          <span>Ideal Temperature</span>
        </div>
      </div>
    </div>
  );
}

function Group({ children }) {
  const [isMovementEnabled, setIsMovementEnabled] = useState(true);
  const ref = useRef();
  const rotationScale = 0.27; // Adjust this value to control the rotation speed
  const modelScale = 1.45; // Increase this value to scale up the 3D models

  useFrame(({ mouse }) => {
    if (ref.current && ref.current.rotation && isMovementEnabled) {
      ref.current.rotation.y = mouse.x * Math.PI * rotationScale;
      ref.current.rotation.x = (mouse.y - 0.5) * Math.PI * rotationScale * 0.5;
    }
  });

  const handleClick = () => {
    setIsMovementEnabled((prev) => {
      console.log(prev ? "Movement off" : "Movement on");
      return !prev;
    });
  };

  return (
    <group
      ref={ref}
      onClick={handleClick}
      scale={[modelScale, modelScale, modelScale]}
    >
      {children}
    </group>
  );
}

export default App;
