import styled from "styled-components";
import { colors } from "../../style/theme";

export const ListTitle = styled.h2`
  color: #e4e6ec;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;

  &::after {
    content: "";
    width: 1rem;
    height: 1px;
    background: ${colors.darkRed};
    display: inline-block;
    vertical-align: middle;
    margin-left: 1rem;
  }
`;
