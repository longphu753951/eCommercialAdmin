import { Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AuthRoutes = () => {
  return <Route path="/dashboard" element={<Dashboard />}></Route>;
};

export default AuthRoutes;
