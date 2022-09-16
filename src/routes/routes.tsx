import { Route, Routes } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Login from '../pages/Login';

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/auth" element={<Admin />} />
    </Routes>
  );
};

export default RoutesContainer;
