import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AirPollution from './Routes/App/AirPollution';
import Home from './Routes/Home/Home';
import Countries from './Routes/Countries/Countries';
import Pollution from './Routes/Pollution/Pollution';
import NotFound from './Routes/NotFound/NotFound';
import './Styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AirPollution />}>
          <Route index element={<Home />} />
          <Route path=":region" element={<Countries />} />
          <Route path=":country/:sn/:latitude/:longitude" element={<Pollution />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
