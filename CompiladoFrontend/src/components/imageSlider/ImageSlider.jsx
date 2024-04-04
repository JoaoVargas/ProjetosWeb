import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsDot } from 'react-icons/bs'
import './ImageSlider.css'

const ImageSlider = ({url, page=1, limit=5}) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ errorMsg, setErrorMsg ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (!data) {
        setErrorMsg('Error: Empty data');
        setLoading(false);
        return;
      }

      setImages(data)
      setLoading(false);

    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false);
    }
  }
  
  useEffect(() => {
    if (url == ''){
      return
    }

    fetchImages(url);
  }, [url])

  if (loading) {
    return (
      <div className="project-slider">
      <div className='project-slider-title'>
        <h1>Image Slider</h1>
      </div>
      <div className="container-slider">
        <h2>
          Loading ...
        </h2>
      </div>
    </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="project-slider">
      <div className='project-slider-title'>
        <h1>Image Slider</h1>
      </div>
      <div className="container-slider">
        <h2>
          Error
        </h2>
        <p>{errorMsg}</p>
      </div>
    </div>
    );
  }

  function handleClickLeft() {
    if (currentSlide == 0) {
      setCurrentSlide(images.length - 1)
      return
    }

    setCurrentSlide(currentSlide - 1)
  }
  function handleClickRight() {
    if (currentSlide == images.length - 1) {
      setCurrentSlide(0)
      return
    }

    setCurrentSlide(currentSlide + 1)
  }
  function handleClickDot(index) {
    setCurrentSlide(index)
  }

  return (
    <div className="project-slider">
      <div className='project-slider-title'>
        <h1>Image Slider</h1>
      </div>
      <div className="container-slider">
        <div className='images-slider'>
          <BsArrowLeftCircleFill 
            className='arrow'
            size={30}
            onClick={() => handleClickLeft()}
            />
          {
            images && images.length
              ? 
                images.map((item) => (
                  images.indexOf(item) == currentSlide 
                    ? 
                      (
                        <img 
                          key={item.id}
                          src={item.download_url}
                          alt={item.download_url}
                          className='image-slider'
                          />
                      )
                    : 
                      (
                        <img 
                          key={item.id}
                          src={item.download_url}
                          alt={item.download_url}
                          className='image-slider'
                          hidden
                          />
                      )
                ))
              : null
          }
          <BsArrowRightCircleFill 
            className='arrow'
            size={30}
            onClick={() => handleClickRight()}
            />
        </div>

        <div className='indicators-slider'>
          {
            images && images.length
              ? 
                images.map((item) => (
                  <BsDot 
                    key={item.id}
                    className={images.indexOf(item) == currentSlide ? 'indicator-slider' : null}
                    size={25}
                    onClick={() => handleClickDot(images.indexOf(item))}
                    />
                ))
              : 
                null
          }
        </div>
      </div>
    </div>
  );
}

export default ImageSlider