import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import UserContext from '../../contexts/UserContext';

export function Header() {

  const { user } = useContext(UserContext);


  return (
    <Container>
      <LogoContainer></LogoContainer>
      <InputContainer />
      <ActionContainer>
        <FiShoppingCart />
        <FiHeart />
        { !user.name ? (<Link to="/signin">
          <div>
            <span>Entrar/Cadastrar</span>
            <FiUser />
          </div>
        </Link>) : (<Link to="/">
          <div>
            <span>{user.name}</span>
            <FiUser />
          </div>
        </Link>)}

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

  a {
    all: unset;
  }
`;

const LogoContainer = styled.div`
  flex-grow: 1;

  img {
    width: 60px;
  }
`;

const InputContainer = styled.input`
  height: 30px;
  flex-grow: 2;
  border: solid 1px ${(props) => props.theme.gray3};
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

  svg:hover,
  span:hover {
    cursor: pointer;
    color: gray;
  }

  div {
    display: flex;
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
