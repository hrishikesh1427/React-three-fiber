import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import Navbar from "./Navbar";
import "./App.css";

// Define the temperature thresholds and corresponding colors
const colors = {
  red: "#FF5733",
  orange: "#FFA500",
  green: "#33FF57",
};

// Inside the App component
function App() {
  const positions = Array.from({ length: 20 }).map((_, index) => {
    const angleIncrement = (Math.PI * 2) / 20;
    const radius = 3.8;
    const x = Math.cos(angleIncrement * index) * radius;
    const z = Math.sin(angleIncrement * index) * radius;
    return [x, 0, z];
    // console.log(positions)
  
  });
  console.log(positions)
  // Function to determine color based on temperature
  function getColorForTemperature(temperature) {
    if (temperature >= 100) {
      return colors.red;
    } else if (temperature >= 70 && temperature < 100) {
      return colors.orange;
    } else {
      return colors.green;
    }
  }

  // Dummy temperature values for demonstration
  const temperatures = [
    [10, 7, 10],
    [100, 100, 70],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
    

    // Add remaining tuyeres here...
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#524C42",
        borderRadius: "10px",
      }}
    >
      <Navbar/>
      <div
        style={{
          marginTop: "9%",
          borderRadius: "10px",
          width: "80%",
          height: "60%",
          backgroundColor: "#EEEEEE",
        }}
      >
       <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 5, 10] }}>
          <directionalLight position={[0, 0, 2]} />
          <ambientLight intensity={0.35} />
          <Group>
            {positions.map((position, tuyereIndex) => (
              <group key={tuyereIndex} position={position}>
                {temperatures[tuyereIndex].map((temperature, partIndex) => (
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
      <div style={{ borderRadius:"10px",marginTop: "25px" }} className="overlay">
        <div style={{ color:"white", marginBottom:"5px",display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#FF5733",
            }}
          ></div>
          <span>Critical Temperature</span>
        </div>
        <div style={{  color:"white", marginBottom:"5px",display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#FFA500",
            }}
          ></div>
          <span>Moderate Temperature</span>
        </div>
        <div style={{color:"white",marginBottom:"5px", display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#33FF57",
            }}
          ></div>
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