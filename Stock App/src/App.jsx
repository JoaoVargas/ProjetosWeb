import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StockDetailPage from './routes/StockDetailPage.jsx';
import StockOverviewPage from './routes/StockOverviewPage.jsx';
import { WatchListContextProvider } from './contexts/WatchListContext.jsx';

function App() {
  return (
    <main className='container'>
      <WatchListContextProvider>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<StockOverviewPage />}
            />
            <Route
              path='/detail/:symbol'
              element={<StockDetailPage />}
            />
          </Routes>
        </Router>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
