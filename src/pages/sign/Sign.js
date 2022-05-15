import React, { useContext } from 'react';
import styled from 'styled-components';
import { ImFacebook } from "react-icons/im";
import { AiOutlineGoogle, AiOutlineFacebook } from "react-icons/ai";
import { createUser } from '../../services/firme.service';
import { signInWithGoogle } from '../../services/firebase.service';
import UserContext from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import Button from '../../styles/Button';

export function Sign() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSignIn() {
    const result = signInWithGoogle();
    result.then((res) => {
      const {
        accessToken: sessionToken,
        displayName: name,
        photoURL: profile,
        email,
        uid,
      } = res.user;
      createUser({
        name,
        email,
        profile,
        uid,
        sessionToken,
      });

      setUser({
        name,
        email,
        profile,
        uid,
        sessionToken,
      });
      navigate('/');
    });
  }

  return (
    <Container>
      <h4>Cadastrar ou Entrar</h4>
      <div>
        <SignInContainer>
          <Button onClick={handleSignIn}>
            <div>
              <AiOutlineGoogle />
            </div>
          </Button>
          <Button>
            <div>
              <ImFacebook />
            </div>
          </Button>
        </SignInContainer>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40vh 30vw;
  border: 1px solid black;
  height: 140px;
  flex: 2;
`;

const SignInContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
      margin: 2px 0;
  }
`;
