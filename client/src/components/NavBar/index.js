import React, { useState, useEffect } from 'react';

const Navbar = props => {
  let currentUsername = sessionStorage.getItem('currentUsername');

  useEffect(() => {});

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand h1 mb-0" href="/">
        Paint-Hustle
      </a>
      <a className="nav-item text-light" href={currentUsername ? '/myaccount/' : '/login'}>
        {currentUsername ? 'My Account' : 'Sign in / Sign Up'}
      </a>
      <a className="nav-item text-light" onClick={() => props.handlePageChange('Market')} href="/marketplace">
        Marketplace
      </a>
    </nav>
  );
};

export default Navbar;