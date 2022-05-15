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
            <div>
                <FiInstagram />
                <FiFacebook />
                <FiTwitter />
                <FiYoutube />
            </div>
            <div>
                lojinha - {new Date().getFullYear()}
            </div>
            <div>

            </div>

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
        display: flex;
        margin: 0 10px;

        svg {
            font-size: 18px;
            padding: 0 4px;
        }

        svg:hover {
            cursor: pointer;
            color: gray;
        }
    }

`