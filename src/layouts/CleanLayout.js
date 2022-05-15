import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { main } from '../styles/Theme';

export function CleanLayout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={main}>
      <Container>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      
      </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

`;

const ContentContainer = styled.div`
    height: 100%;
`