import React from "react";
import EmailMe from "../EmailMe";
import { SITE_CONFIG } from "../../utils/constants";
import { Wrapper, Nav, NavItem, NavLink } from "./style";

const Menu = () => (
  <Wrapper>
    <Nav>
      <NavItem>
        <a
          href={SITE_CONFIG.social.github}
          rel="noopener noreferrer"
          target="_blank">
          GitHub
        </a>
      </NavItem>
      <NavItem>
        <a
          href={SITE_CONFIG.social.linkedin}
          rel="noopener noreferrer"
          target="_blank">
          LinkedIn
        </a>
      </NavItem>
      <NavItem $highlight>
        <EmailMe text="Contact" />
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/projects">Featured</NavLink>
      </NavItem>
    </Nav>
  </Wrapper>
);

export default Menu;
