import { useState } from 'react';
import './StarRating.css';
import {FaStar} from 'react-icons/fa'

const StarRating = ({nStars}) => {
  const [ rating, setRating] = useState(0);
  const [ hover, setHover ] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="project-star">
      <div className='project-star-title'>
        <h1>Star Rating</h1>
      </div>
      <div className="container-star">
        {
          [...Array(nStars)].map((_, index) => {
            index += 1;

            return (
              <FaStar
                key={index}
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={75}
                />
            );
          })
        }
      </div>
    </div>
  );
}

export default StarRating