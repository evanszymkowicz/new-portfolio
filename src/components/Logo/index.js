import { Link } from "gatsby";
import Circle from "./circle.svg";
import { Wrapper } from "./style";

export default function Logo() {
  return (
    <Wrapper>
      <div>
        <Link to="/">
          <Circle width={22} height={22} />
        </Link>
        <div className="circle" />
      </div>
    </Wrapper>
  );
}
