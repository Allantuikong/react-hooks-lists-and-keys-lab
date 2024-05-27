import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksA = links.map((link, index) => (
    <a key={index} href={`#${link}`}>{link}</a>
  ));

  return <nav>{linksA}</nav>;
}

export default NavBar;
