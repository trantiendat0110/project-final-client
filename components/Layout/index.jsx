import React from "react";
import Navigation from "../Navigation";
import styled from "styled-components";
const MainStyled = styled.main`
  display: flex;
`;
const ContentStyled = styled.section`
  flex: 1;
  margin: 2em 0;
  margin-left: 200px;
  width: 100%;
`;
export default function Layout({ children }) {
  return (
    <>
      <Navigation></Navigation>
      <MainStyled>
        <ContentStyled>{children}</ContentStyled>
      </MainStyled>
    </>
  );
}
