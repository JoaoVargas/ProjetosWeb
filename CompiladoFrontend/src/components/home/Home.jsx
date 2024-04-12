import '../../assets/Home.css'

import Acordiao from '../acordiao/Acordiao'
import ColorGenerator from '../colorGenerator/ColorGenerator';
import StarRating from '../starRating/StarRating';
import ImageSlider from '../imageSlider/ImageSlider';
import LoadMore from '../loadMore/LoadMore';
import TreeView from '../treeView/TreeView';
import menus from '../treeView/data';
import QrGenerator from '../qrGenerator/QrGenerator';
import Theme from '../themes/Theme';
import ScrollIndicator from '../scrollIndicator/ScrollIndicator';

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
        limit={15}
        />
      <LoadMore />
      <TreeView menus={menus}/>
      <QrGenerator />
      <Theme />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=20'} />
    </main>
  );
}

export default Home
