import React, { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import styled, { ThemeProvider } from 'styled-components';
import { main } from '../styles/Theme';
import Footer from '../components/Footer/Footer';
import SidebarContext from '../contexts/SidebarContext';
import SidebarMobile from '../components/header/SidebarMobile';

export function MainLayout() {
  const [sidebarMobile, setSidebarMobile] = useState(false);

  return (
    <React.Fragment>
      <ThemeProvider theme={main}>
        <SidebarContext.Provider value={{ sidebarMobile, setSidebarMobile }}>
          {sidebarMobile ? (
            <SidebarMobile />
          ) : (
            <Container>
              <ContentContainer>
                <HeaderContainer>
                  <Header />
                </HeaderContainer>
                <Outlet />
              </ContentContainer>
              <Footer />
            </Container>
          )}
        </SidebarContext.Provider>
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
`;
const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 12vh;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
