import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Blog from './pages/Blog';
import Notaris from './pages/Notaris';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profil' element={<Profil />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/notaris' element={<Notaris />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
