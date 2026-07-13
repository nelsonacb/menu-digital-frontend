import { Routes, Route } from 'react-router';
import { MenuDigital } from './pages/MenuDigital';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<MenuDigital />}
      />
    </Routes>
  );
}

export default App;
