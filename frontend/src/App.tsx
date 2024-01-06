import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import the components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Services from "./components/page elements/Home Sections/Services.tsx";
import Testimonials from "./components/page elements/Home Sections/Testimonials.tsx";

const router = createBrowserRouter([
    // Add routes for the component pages
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact", element: <Contact /> },
    { path: "/services", element: <Services /> },
    { path: "/testimonials", element: <Testimonials /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
