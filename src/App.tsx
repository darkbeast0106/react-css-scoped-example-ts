import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import OtherPage from "./components/pages/OtherPage";

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [{
    path: "/",
    element: <MainPage />
  },
  {
    path: "/other",
    element: <OtherPage />
  }
]
}]);

function App() {
  return ( 
    <RouterProvider router={router} />);
}

export default App;