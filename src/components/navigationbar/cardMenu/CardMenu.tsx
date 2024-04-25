import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface CateItem {
  id: number;
  title: string;
  items: string[];
  searchText: string;
}

function CardMenu({ id, title, items, searchText }: CateItem) {
  const [itemList] = useState(items);
  searchText = searchText.toLowerCase().trim();
  const filteredList = itemList.filter((i, index) => {
    return searchText === '' ? i : i.toLowerCase().includes(searchText);
  });

  return (
    <div>
      {filteredList.length !== 0 && <p className="menu-name">{title}</p>}
      <div className="categories">
        {filteredList.map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => {
              return isActive ? 'active-styles' : 'link-styles';
            }}
            style={{
              textDecoration: 'none',
              padding: '11px 0 10px 16px',
            }}
            to={'/' + item.toLowerCase()}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;
