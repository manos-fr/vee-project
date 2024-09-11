import {
  ReactLocation,
  Router,
  Route,
  Navigate,
} from '@tanstack/react-location';
import Dashboard from './pages/dashboard';


export const Routes = ({ children }: any) => {
const location = new ReactLocation();

const routes: Route[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    element: <Navigate to="/" />,
  },
];

return (
    <Router location={location} routes={routes}>
      {children}
    </Router>
);
};
