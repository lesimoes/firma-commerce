import React from 'react';
import { Outlet, BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/header/Header';
import styled, { ThemeProvider } from 'styled-components';
import { main } from '../styles/Theme';
import Footer from '../components/Footer/Footer';

export function MainLayout({ children }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={main}>
      <Container>
        <ContentContainer>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
          <Outlet />
        </ContentContainer>
        <Footer />
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
    margin-top: 20vh;
    min-height: 90vh;
`
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 12vh;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`