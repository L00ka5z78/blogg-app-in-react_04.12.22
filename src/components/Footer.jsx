import React from 'react';
import Logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made with love and <b>React</b>.
      </span>
    </footer>
  );
};

export default Footer;
