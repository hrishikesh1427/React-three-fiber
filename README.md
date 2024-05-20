

https://github.com/hrishikesh1427/React-three-fiber/assets/84369074/3bd2e267-9155-4c6d-b1e2-3fac2bfc7710


![3dmodelUIsnippet](https://github.com/hrishikesh1427/React-three-fiber/assets/84369074/efb1783c-c88b-464c-a9cf-7fc5ed0d8697)


Sure, here is the complete README file in the requested format:

```markdown
# Temperature Visualization App

This project is a React-based web application that visualizes temperature data received from a server via Socket.IO. The temperatures are displayed on a 3D canvas using Three.js, allowing users to see a real-time update of temperature values for different tuyeres.

## Features

- **Real-time Temperature Data**: Connects to a server and receives temperature updates in real-time.
- **3D Visualization**: Displays temperature data using 3D cylinders on a canvas.
- **Color-Coded Temperatures**: Cylinders change color based on temperature values:
  - Red: Critical Temperature (>= 100)
  - Orange: Moderate Temperature (70 <= Temperature < 100)
  - Green: Ideal Temperature (< 70)
- **Interactive Canvas**: Users can rotate the 3D model by moving the mouse and toggle rotation movement by clicking.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/temperature-visualization-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project name 
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- **Connecting to Server**: The app attempts to connect to a server at `http://192.168.0.102:5000/roi_temperature`. Adjust the URL as needed for your server.
- **Viewing Temperatures**: The 3D canvas displays cylinders representing different tuyeres. The color of each cylinder indicates its temperature status.
- **Interacting with the Canvas**: Move your mouse to rotate the 3D model. Click on the canvas to toggle the rotation movement.

## Code Overview

### `App.js`

- **State Management**: Uses the `useState` hook to manage the `temperatures` array.
- **Socket.IO Connection**: Establishes a connection to the server and listens for temperature updates.
- **Temperature Color Mapping**: Determines the color of each cylinder based on its temperature.
- **3D Canvas**: Utilizes `@react-three/fiber` and `@react-three/drei` for rendering the 3D scene and objects.

### `Navbar.js`

- Simple navigation bar component.

### `App.css`

- Basic styling for the application.

## Dependencies

- `react`: Frontend library for building user interfaces.
- `react-three/fiber`: React renderer for Three.js.
- `@react-three/drei`: Useful helpers for Three.js.
- `socket.io-client`: Client library for Socket.IO.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [Socket.IO](https://socket.io/)
```

