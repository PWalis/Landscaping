import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import the components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services.tsx";

const router = createBrowserRouter([
    // Add routes for the component pages
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services", element: <Services /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
