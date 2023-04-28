import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import PublicRoutes from './routes/index.routes';
import DEFAULTLAYOUT from './layout/defaultLayout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Routes>
        {PublicRoutes.map(router => {
          const PAGE = router.component
          var Layout = DEFAULTLAYOUT
          if (router.Layout) {
            var Layout = router.Layout
          }else if (router.Layout === null) {
            var Layout = <Fragment />
          }
          return <Route path='/' element={<Layout>
            <PAGE />
          </Layout>}  />
        })}
      </Routes>
    </Router>
  );
}

export default App;
