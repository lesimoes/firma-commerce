import React from 'react';
import styled from 'styled-components'

import {
    FiInstagram,
    FiFacebook,
    FiTwitter,
    FiYoutube,
} from "react-icons/fi";

export default function Footer () {

    return (
        <Container>
            <Social>
                <FiInstagram />
                <FiFacebook />
                <FiTwitter />
                <FiYoutube />
            </Social>
            <Copyright>
                lojinha - {new Date().getFullYear()}
            </Copyright>


        </Container>
    )
}

const Container = styled.footer`
    display: flex;
    flex: 4;
    justify-content: space-between;
    padding: 10px 20px;
    border-top: solid 1px ${props => props.theme.gray3};

    div {

    }

    @media (max-width: 600px) {
        justify-content: center;
    }

`

const Copyright = styled.div`
        display: flex;
        margin: 0 10px;

    @media (max-width: 600px) {
        display: none;
    }
`

const Social = styled.div`
        svg {
            font-size: 18px;
            padding: 0 4px;
        }

        svg:hover {
            cursor: pointer;
            color: gray;
        }

    @media (max-width: 600px) {
        display: flex;
    }

`