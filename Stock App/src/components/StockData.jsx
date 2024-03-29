import { useState, useEffect } from 'react';
import finnHub from '../assets/finnHub';

const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnHub.get('/stock/profile2', {
          params: {
            symbol,
          },
        });

        if (isMounted) {
          setStockData(response.data);
          console.log(response.data);
        }
      } catch (err) {}
    };

    fetchData();
    return () => (isMounted = false);
  }, [symbol]);

  return (
    <div>
      {stockData && (
        <div>
          <div>
            <img
              className='rounded mx-auto mt-5 d-block'
              style={{ width: '20%' }}
              src={stockData.logo}
            />
          </div>
          <div className='row border bg-white rounded shadow-sm p-4 mt-5'>
            <div className='col'>
              <div>
                <span className='fw-bold'>Name: </span>
                {stockData.name}
              </div>
              <div>
                <span className='fw-bold'>Country: </span>
                {stockData.country}
              </div>
              <div>
                <span className='fw-bold'>Ticker: </span>
                {stockData.ticker}
              </div>
            </div>
            <div className='col'>
              <div>
                <span className='fw-bold'>Exchange: </span>
                {stockData.exchange}
              </div>
              <div>
                <span className='fw-bold'>Industry: </span>
                {stockData.finnhubIndustry}
              </div>
              <div>
                <span className='fw-bold'>IPO: </span>
                {stockData.ipo}
              </div>
            </div>
            <div className='col'>
              <div>
                <span className='fw-bold'>Marketcap: </span>
                {stockData.marketCapitalization}
              </div>
              <div>
                <span className='fw-bold'>Shares Outstanding: </span>
                {stockData.shareOutstanding}
              </div>
              <div>
                <span className='fw-bold'>URL: </span>
                <a href={stockData.weburl}>{stockData.weburl}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockData;
