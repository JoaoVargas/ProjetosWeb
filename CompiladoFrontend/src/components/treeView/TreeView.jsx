import './TreeView.css'
import data from './data';
import MenuList from './MenuList';

const TreeView = ({menus = []}) => {
  return (
    <div className="project-treeview">
      <div className='project-treeview-title'>
        <h1>Tree View</h1>
      </div>
      <div className="container-treeview">
        <MenuList list={menus}/>
      </div>
    </div>
  );
}

export default TreeView