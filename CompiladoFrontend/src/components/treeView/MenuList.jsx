import MenuItem from "./MenuItem";


const MenuList = ({list = []}) => {
  return (
    <div className="menu-list-treeview">
      {
        list && list.length
        ?
          list.map((listItem) => (
            <MenuItem item={listItem}/>
          ))
        :
          null
      }
    </div>
  );
}

export default MenuList 