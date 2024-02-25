import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// Import the components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Services from "./components/page elements/Home Sections/Services.tsx";
import Testimonials from "./components/page elements/Home Sections/Testimonials.tsx";
import MakeAppointment from "./components/pages/MakeAppointment.tsx";
import Login from "./components/pages/Login.tsx";
import GalleryDashboard from "./components/pages/GalleryDashboard.tsx";

const router = createBrowserRouter([
  // Add routes for the component pages
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/makeAppointment", element: <MakeAppointment /> },
  { path: "/login", element: <Login /> },
  { path: "/GalleryDashboard", element: <GalleryDashboard /> },
]);
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
