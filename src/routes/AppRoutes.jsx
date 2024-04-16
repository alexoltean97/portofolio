import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Portofolio from '../pages/Portofolio/Portofolio';
import Gigs from "../pages/Gigs/Gigs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/gigs" element={<Gigs />} />
    </Routes>
  );
};

export default AppRoutes;
