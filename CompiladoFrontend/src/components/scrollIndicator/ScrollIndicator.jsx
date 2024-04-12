import { useEffect, useState } from 'react';
import './scrollIndicator.css'

const ScrollIndicator = ({url}) => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading] = useState(false);
  const [ error, setError ] = useState('');
  const [ scrollPercentage, setScrollPercentage ] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
      setLoading(false);
    }
  }

  function handleScrollUpdate() {
    const howMuchScrolled = 
    document.body.scrollTop ||
    document.documentElement.scrollTop;

    const height = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url])

  useEffect(() => {
    window.addEventListener('scroll', handleScrollUpdate);

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div className="project-scroll" id='teste'>
      <div className='project-scroll-title'>
        <h1>Custom Scroll</h1>
      </div>
      <div className="container-scroll">
        {
          loading
          ?
            <h1>Loading...</h1>
          :
            data && data.length > 0
            ?
              data.map((item) => (
                <div className='item-lista-scroll'>
                  <h3>
                    {item.title}
                  </h3>
                  <p>
                    <b>{item.category}</b>
                  </p>
                  <p>
                    {item.description}
                  </p>
                </div>
              ))
            :
              null
        }
      </div>
      <div className='scrollbar-scroll' style={{width: `${scrollPercentage}%`}}>
      </div>
    </div>
  );
}

export default ScrollIndicator