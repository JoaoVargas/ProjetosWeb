import MenuItem from "./MenuItem";


const MenuList = ({list = []}) => {
  return (
    <ul className="menu-list-treeview">
      {
        list && list.length
        ?
          list.map((listItem) => (
            <MenuItem item={listItem}/>
          ))
        :
          null
      }
    </ul>
  );
}

export default MenuList 