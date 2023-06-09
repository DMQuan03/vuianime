import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import PublicRoutes from './routes/index.routes';
import { AdminRoutes } from './routes/index.routes';
import DEFAULTLAYOUT from './layout/defaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
        <div>
      <Routes>
          {PublicRoutes.map((router, index )=> {
            const PAGE = router.component
            var Layout = DEFAULTLAYOUT
            if (router.Layout === null) {
              var Layout = Fragment
            }else if (router.Layout) {
              var Layout = router.Layout
            }
            return <Route key={index} path={router.path} element={<Layout><PAGE /></Layout>}  />
          })}
          {AdminRoutes.map((el, index) => {
            return <Route key={index} path={el.path} element={<el.component />} />
          })}
      </Routes>
        </div>
    </Router>
  );
}

export default App;
