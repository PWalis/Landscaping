import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import the components
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> }, // Add a route for the About component
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
