import React from 'react';
import styled from 'styled-components';
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <Container>
      <LogoContainer>
      </LogoContainer>
      <InputContainer />
      <ActionContainer>
        <FiShoppingCart />
        <FiHeart />
        <div>
          <span>Entrar/Cadastrar</span>
          <FiUser />
        </div>
      </ActionContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  padding: 20px 0px;

`;

const LogoContainer = styled.div`
  flex-grow: 1;

  img {
    width: 60px;
  }
`

const InputContainer = styled.input`
  height: 30px;
  flex-grow: 2;
  border: solid 1px ${props => props.theme.gray3};
  border-radius: 2px;
  margin: 0 2% 0 2%;
  font-size: 18px;
  padding: 0 4px;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
  color: ${(props) => props.theme.gray1};

  span {
    font-size: 12px;
  }

  svg:hover, span:hover {
    cursor: pointer;
    color: gray;
  }

  div {
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: 0.1;
  }

  h4 {
    color: ${(props) => props.theme.gray1};
    margin: 0;
    margin-top: 8%;
  }
  h6 {
    margin: 0;
  }
`;
