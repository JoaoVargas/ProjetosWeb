import { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({item}) => {
  const [ displayChildren, setDisplayChildren ] = useState(false);

  return (
    <li>
      <div 
      className="menu-item-treeview">
        <p 
        className="menu-item-title-treeview" 
        onClick={() => setDisplayChildren(!displayChildren)}>
          {item.label}
        </p>
        {
          item && item.children && item.children.length > 0 
          ?
            displayChildren
            ?
              <span 
              onClick={() => setDisplayChildren(!displayChildren)}>
                -
              </span>
            :
              <span 
              onClick={() => setDisplayChildren(!displayChildren)}>
                +
              </span>
          :
            null
        }
      </div>
      {
        displayChildren && item && item.children && item.children.length > 0
        ?
          <MenuList list={item.children}/>
        : 
          null
      }
    </li>
  );
}

export default MenuItem 