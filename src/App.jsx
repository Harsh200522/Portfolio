import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
]);

const App=()=>{
  return(
  <RouterProvider router={router} />
)
}

export default App;
