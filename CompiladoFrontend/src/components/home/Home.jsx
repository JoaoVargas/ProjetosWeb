import '../../assets/Home.css'

import Acordiao from '../acordiao/Acordiao'
import ColorGenerator from '../colorGenerator/ColorGenerator';
import StarRating from '../starRating/StarRating';
import ImageSlider from '../imageSlider/ImageSlider';

function Home() {

  return (
    <main>
      <Acordiao />
      <ColorGenerator />
      <StarRating 
        nStars={10}
        />
      <ImageSlider 
        url={'https://picsum.photos/v2/list'} 
        page={3} 
        limit={5}
        />
    </main>
  );
}

export default Home
