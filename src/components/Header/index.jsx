// Header в собі містить:
//  незалежно від статусу користувача
//   - Logo компанії
//  для авторизованого користувача
//  - блок зі списком елементів навігації UserNav(якщо на backendі наявна інформація про параметри авторизованого користувача)
//  - блок з інформацією про поточного користувача UserBar
//  - кнопку LogOutBtn

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return <Link to="/">Header</Link>;
}

export default Header;
