import React from "react";
import { useState, useEffect } from "react";
import Logo from "../Logo";
import Footer from "../Footer";
import Menu from "../Menu";
import ToggleMenu from "../ToggleMenu";
import { Wrapper, Header, Shoable } from "./style";

//  Functional component with hooks (replaces class component)
export default function Navigation({ location }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  // replaces componentDidUpdate
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <Wrapper>
      <Header>
        <Logo />
        <ToggleMenu open={open} onClick={toggleMenu} />
      </Header>
      <Shoable open={open}>
        <div>
          <Menu />
          <Footer />
        </div>
      </Shoable>
    </Wrapper>
  );
}
