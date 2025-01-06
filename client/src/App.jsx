import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Applayout from './layout/app-layout';
import LandingPage from './pages/landing';


const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
    ],
  },
]);

function App() {
  return (
  <RouterProvider router={router}/>
);
}

export default App;
