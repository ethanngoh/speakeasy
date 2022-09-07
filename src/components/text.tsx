import styled from "@emotion/styled";
import { GRAY_RANGE } from "../colors";

export const Separator = styled.hr`
  margin: 1rem 0 1.25rem 0;
  width: 33%;
  border: 0;
  border-top: 1px solid white;
`;
export const HEADING = styled.div`
  font-family: "Limelight", cursive;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
`;
export const BODY = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.2rem;
  font-family: "Comfortaa", cursive;
  color: ${GRAY_RANGE[100]};
`;
export const SUBBODY = styled.div`
  line-height: 1.2rem;
  font-size: 0.8rem;
  font-family: "Comfortaa", cursive;
  color: ${GRAY_RANGE[200]};
`;
