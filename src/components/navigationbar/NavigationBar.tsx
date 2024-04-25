import React, { useState } from 'react';
import './navigationBar.scss';
import { ISearchBoxStyles, SearchBox } from '@gui/fluent-ui-allure';
import { menu } from '../../data/menu.js';
import CardMenu from './cardMenu/CardMenu';

function NavigationBar() {
  const [searchText, setSearchText] = useState<string>('');
  const handleInput = (
    event?: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue?: string | undefined
  ) => {
    if (event) {
      setSearchText(event.target.value);
    }
  };
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { height: 32 },
    box: { width: 200 },
    iconButton: { top: 4 },
  };
  return (
    <div className="menu-container">
      <div className="search-field2">
        <SearchBox
          styles={searchBoxStyles}
          showIcon
          placeholder="Type search keyword"
          style={{ fontStyle: 'normal' }}
          value={searchText}
          onChange={handleInput}
          onClear={() => setSearchText('')}
        />
      </div>
      {menu.map((cate) => (
        <CardMenu key={cate.id} {...cate} searchText={searchText} />
      ))}
    </div>
  );
}

export default NavigationBar;
