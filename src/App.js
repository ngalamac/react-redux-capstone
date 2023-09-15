import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './components/pages/Home';
import Details from './components/pages/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/:code" element={<Details />} />
    </>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
