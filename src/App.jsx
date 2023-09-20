import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Admin from "./pages/Admin";

function App() {
  // Router Configuration

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        {}
        {router.route}
      </div>
    </RouterProvider>
  );
}

export default App;
