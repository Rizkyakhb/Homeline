import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Blog from './pages/Blog';
import Notaris from './pages/Notaris';
import Admindashboard from './pages/Admindashboard';
import Adminblog from './pages/Adminblog';
import Adminlistpesanan from './pages/Adminlistpesanan';
import Adminnotaris from './pages/Adminnotaris';
import Adminpelanggan from './pages/Adminpelanggan';
import Adminpostblog from './pages/Adminpostblog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profil' element={<Profil />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/notaris' element={<Notaris />} />
        <Route path='/admindashboard' element={<Admindashboard />} />
        <Route path='/adminblog' element={<Adminblog />} />
        <Route path='/adminlistpesanan' element={<Adminlistpesanan />} />
        <Route path='/adminnotaris' element={<Adminnotaris />} />
        <Route path='/adminpelanggan' element={<Adminpelanggan />} />
        <Route path='/adminpostblog' element={<Adminpostblog />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
