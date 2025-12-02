import React from "react";
import { Link } from "gatsby";
import Circle from "./circle.svg";
import { Wrapper } from "./style";

export default function Logo() {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <img src={Circle} width={22} height={22} alt="Logo" />
        </Link>
        <div className="circle" />
      </div>
    </Wrapper>
  );
}
