import React from 'react';
import routers from './pages/routers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {routers.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }>
                  <Route
                    path=":id"
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                  <Route
                    path=":id"
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                </Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
