import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Applayout from './layout/app-layout';
import LandingPage from './pages/landingpage';
import Onboarding from './pages/onboarding';

const router = createBrowserRouter([
  {
    element: <Applayout />,
    childern: [
      {
        path:"/",
        element: <LandingPage />,
      },
      {
        path:"/onboarding",
        element: <Onboarding />,
      },
    ],
  },
]),

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
