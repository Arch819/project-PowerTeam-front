// Welcome page "/welcome"
// Містить:
//  - головний заголовок застосунку
//  - список посилань на сторінки SignUp page та SignIn page

import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <>
      <h1>Transforming your body shape with Power Pulse</h1>
      <Link to="/signin">Login</Link>
      <Link to="/signup">Reg</Link>
    </>
  );
}

export default WelcomePage;
