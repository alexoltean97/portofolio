import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Portofolio from '../pages/Portofolio/Portofolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolio" element={<Portofolio />} />
    </Routes>
  );
};

export default AppRoutes;
