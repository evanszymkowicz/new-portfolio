import { useState } from "react";
import { ListItem } from "../../style/shared";
import { Wrapper, Position } from "./style";

const JobListItem = ({ year, position, company }) => {
  const [revealed, setRevealed] = useState(false);

  const toggle = () => setRevealed((r) => !r);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <ListItem>
      <Wrapper
        className={revealed ? "revealed" : ""}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`${position} at ${company}, reveal year`}
        aria-pressed={revealed}>
        <div className="position">
          <Position>{position}</Position> at <span>{company}</span>
        </div>
        <div className="year">{year}</div>
      </Wrapper>
    </ListItem>
  );
};

export default JobListItem;
