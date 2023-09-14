import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeams } from './redux/footballSlice';
import Teams from './components/Teams';
import TeamDetails from './components/TeamDetails';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/team/:teamId" element={<TeamDetails />} />
      </Routes>
    </div>
  );
}

export default App;
