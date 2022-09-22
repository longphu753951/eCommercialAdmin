import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import Dashboard from '../pages/Admin/Dashboard';
import Login from '../pages/Login';

const RoutesContainer = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route
          path="products"
          element={
            <div>
              <h1 style={{ marginTop: 500 }}>HELLO WORLD</h1>
            </div>
          }
        />
      </Route>
    </>,
  ),
);

export default RoutesContainer;
