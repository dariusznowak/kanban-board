import React from "react";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright ⓒ {new Date().getFullYear() + " Dariusz Nowak"}</p>
    </footer>
  );
};

export default Footer;
