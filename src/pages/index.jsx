import Blog from './Blogs/Blog';
import { Route } from 'react-router-dom';

const routes = [{ path: '/blog', element: <Blog /> }];

const IndexPage = () => {
  return (
    <div>
      <h1>Welcome to the Main App</h1>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </div>
  );
};

export default IndexPage;
