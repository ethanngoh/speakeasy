import styled from "styled-components";
import React, { PropsWithChildren } from "react";
import { COLORS } from "../colors";
import { useBackgroundColor } from "../hooks/useBackgroundColor";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
`;

const Content = styled.div`
  width 100%;
  
  margin: 20px;
  padding: 20px;

  box-sizing: content-box;

  color: white;
  text-align: center;

  max-width: 500px;
  border: 4px solid ${COLORS.GOLD};
  outline-offset: 5px;
  outline: 4px solid ${COLORS.GOLD};
`;

export const FancyBorder = (props: PropsWithChildren) => {
  useBackgroundColor(COLORS.BLUE);
  return (
    <ContentContainer>
      <Content>{props.children}</Content>
    </ContentContainer>
  );
};
