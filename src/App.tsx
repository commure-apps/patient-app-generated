import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './routes';

export const App = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(entry => <Route key={entry.path} {...entry} />)}
    </Routes>
  </BrowserRouter>
);
