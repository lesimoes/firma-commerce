import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/shared/Card';
import { getUsers } from '../../services/firme.service';
import Categories from '../../components/Categories/Categories';

export function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, [])

  return (
    <Page>
      <Container>
        <CenterContainer>
            <Categories />
        </CenterContainer>
      </Container>
    </Page>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80vw;
  flex-wrap: wrap;
  margin: 20px;
  div {
    flex-basis: 30%;
  }

  @media screen and (max-width: 1140px) {
        width: 90%;
        justify-content: flex-start;
    }

  @media screen and (max-width: 720px) {
        width: 90%;
        justify-content: center;
    }
`;

