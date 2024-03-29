import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalContextProvider from './contexts/GlobalContext';

import Home from './routes/Home';

const App = () => {
  return (
    <GlobalContextProvider>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Router>
    </GlobalContextProvider>
  );
};

export default App
