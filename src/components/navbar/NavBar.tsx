import React, { useState } from 'react';
import './navbar.scss';
import {
  Dropdown,
  IDropdownStyles,
  ISearchBoxStyles,
  SearchBox,
} from '@gui/fluent-ui-allure';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux-context/slices/themeSlice';
import { useNavigate } from 'react-router-dom';

const themes = [
  { text: 'Theme: Cobalt', key: 'Cobalt' },
  { text: 'Theme: Teal', key: 'Teal' },
  { text: 'Theme: Ochre', key: 'Ochre' },
  { text: 'Theme: Violet', key: ' Violet' },
  { text: 'Theme: Magenta', key: ' Magenta' },
  { text: 'Theme: Lavender', key: 'Lavender' },
  { text: 'Theme: Pewter', key: 'Pewter' },
  { text: 'Theme: Mint', key: 'Mint' },
];
const languages = [
  { text: 'English', key: 'en' },
  { text: 'Vietnamese', key: 'vie' },
  { text: 'Chinese', key: 'chi' },
];

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: '200px !important' },
};

function NavBar() {
  const navigate = useNavigate();
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { height: 32 },
    box: { width: 200 },
    iconButton: { top: 4 },
  };
  const dispatch = useDispatch();
  const handleThemeChange = (
    e: React.FormEvent<HTMLDivElement>,
    option: any
  ) => {
    dispatch(changeTheme(option.key));
  };
  const handleSearchPage = (value: string) => {
    value = value.toLowerCase();
    switch (value) {
      case 'button':
      case 'dialog':
      case 'introduction':
        navigate(`/${value}`);
        break;
      default:
        navigate(`/error`);

        break;
    }
  };
  return (
    <div className="nav-container">
      <div className="left-navbar">
        <div className="logo">
          <img src="./img/logo.png" alt="logo_img" />
          <span className="logo-name">Allure UI</span>
        </div>
        <div className="search-field">
          <SearchBox
            styles={searchBoxStyles}
            showIcon
            placeholder="Search page..."
            style={{ fontStyle: 'normal' }}
            onSearch={handleSearchPage}
          />
        </div>
      </div>
      <div className="right-navbar">
        <Dropdown
          className="language-input"
          options={languages}
          styles={dropdownStyles}
          defaultSelectedKey={languages[0].key}
        />
        <Dropdown
          className="theme-input"
          options={themes}
          styles={dropdownStyles}
          // placeholder={'Theme: Colbalt'}
          onChange={handleThemeChange}
          defaultSelectedKey={themes[0].key}
        />
      </div>
    </div>
  );
}

export default NavBar;
