import { useEffect, useState, useContext } from 'react';
import finnHub from '../assets/finnHub';
import { WatchListContext } from '../contexts/WatchListContext';

const AutoComplete = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { addStock } = useContext(WatchListContext);

  const renderDropdown = () => {
    const dropDownClass = search ? 'show' : null;

    return (
      <ul
        className={`dropdown-menu ${dropDownClass}`}
        style={{
          height: '300px',
          oveflowY: 'scroll',
          overflowX: 'hidden',
          cursor: 'pointer',
        }}
      >
        {results.map((result) => (
          <li
            key={result.symbol}
            className='dropdown-item'
            onClick={() => {
              addStock(result.symbol);
              setSearch('');
            }}
          >
            {result.description} ({result.symbol})
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const preResponse = await finnHub.get('/search', {
          params: {
            q: search,
          },
        });

        let response = [];
        preResponse.data.result.map((r) => {
          (r.type === 'Common Stock')?response = [...response,r]:null;
        });

        if (isMounted) {
          setResults(response);
        }
      } catch (err) {}
    };

    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }

    return () => (isMounted = false);
  }, [search]);

  return (
    <div className='w-50 p-5 rounded mx-auto'>
      <div className='form-floating dropdown'>
        <input
          style={{ backgroundColor: 'rgba(145, 158, 171, 0.04)' }}
          type='text'
          id='search'
          className='form-control'
          placeholder='Search'
          autoComplete='off'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <label htmlFor='search'>Search Stock</label>
        {renderDropdown()}
      </div>
    </div>
  );
};

export default AutoComplete;
