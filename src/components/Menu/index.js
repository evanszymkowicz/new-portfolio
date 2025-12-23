import React from "react";
import EmailMe from "../EmailMe";
import { Wrapper, Nav, NavItem, NavLink } from "./style";

const Menu = () => (
  <Wrapper>
    <Nav>
      <NavItem>
        <a
          href="https://github.com/evanszymkowicz"
          rel="noopener noreferrer"
          target="_blank">
          Github
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/evanszymkowicz/"
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
      <NavItem>
        <NavLink to="/profile">Profile</NavLink>
      </NavItem>
    </Nav>
  </Wrapper>
);

export default Menu;
