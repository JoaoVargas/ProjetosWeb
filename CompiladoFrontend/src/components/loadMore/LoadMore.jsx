import { useEffect, useState } from 'react';
import './LoadMore.css'

const LoadMore = () => {
  const [ initialLoading, setInitialLoading ] = useState(false);
  const [ moreLoading, setMoreLoading ] = useState(false);
  const [ maxItens, setMaxItens ] = useState(0);
  const [ products, setProducts ] = useState([]);
  const [ error, setError ] = useState('');

  async function fetchProducts() {
    try {
      setInitialLoading(true);
      const response = await fetch(`
        https://dummyjson.com/products?limit=10&skip=${
          products.length
        }
      `)
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts([...products].concat(result.products));
        setMaxItens(result.total);
        setInitialLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setInitialLoading(false);
    }
  }

  async function fetchMoreProducts() {
    try {
      setMoreLoading(true);
    
      const response = await fetch(`
        https://dummyjson.com/products?limit=10&skip=${
          products.length
        }
      `)
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts([...products].concat(result.products));
        setMoreLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setMoreLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleLoadMoreClick() {
    if (maxItens > products.length) {
      fetchMoreProducts();
    }
  }

  return (
    <div className="project-loadmore">
      <div className='project-loadmore-title'>
        <h1>Load More</h1>
      </div>
      <div className="container-loadmore">
        {
          error !== '' 
            ?
              <div className='erro'>
                <h2>Error:</h2>
                <p>{error}</p>
              </div>
            : 
              initialLoading 
                ?
                  <div>
                    <h2>Loading...</h2>
                  </div>
                :
                  <div className='wrapper-products-loadmore'>
                    <div className='products-grid-loadmore'>
                      {products.map((item) => (
                        <div 
                          key={item.id}
                          className='product-grid-loadmore'
                          >
                            <img 
                              src={item.thumbnail}
                              alt={item.title}
                              />
                              <div>
                                <h3>
                                  {item.title}
                                </h3>
                                <p>
                                  {item.description}
                                </p>
                              </div>
                        </div>
                      ))}
                    </div>
                    {
                      products.length >= maxItens 
                      ?
                        <div></div>
                      :
                        moreLoading
                        ?
                          <button 
                            disabled
                            >
                            Loading...
                          </button>
                        :
                          <button 
                            onClick={() => {handleLoadMoreClick()}}
                            >
                            Load more
                          </button>
                    }
                  </div>
        }
      </div>
    </div>
  );
}

export default LoadMore