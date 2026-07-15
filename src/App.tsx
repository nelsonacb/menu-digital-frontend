import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='/categoria/:categoriaId'
        element={<CategoryPage />}
      />
    </Routes>
  );
}

export default App;
