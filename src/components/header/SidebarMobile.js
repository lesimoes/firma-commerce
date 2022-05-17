import React, { useContext } from 'react';
import styled from 'styled-components'
import { FiArrowLeft } from "react-icons/fi";
import SidebarContext from '../../contexts/SidebarContext'
import Footer from '../Footer/Footer';

export default function SidebarMobile () {

    const {sidebarMobile, setSidebarMobile} = useContext(SidebarContext);

    return (
        <Container>
            <div className="header">
                <FiArrowLeft size={32} onClick={() => setSidebarMobile(!sidebarMobile)}/>
            </div>
            <ul>
                <li>Perfil</li>
                <li>Carrinho</li>
            </ul>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 20;
    padding: 20px 10px;

    .header {
        display: flex;
        justify-content: flex-start;
        flex: 1;    
    }



    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    ul {
        list-style-type: none;
        flex: 1;

    }

    li {
        font-size: 24px;
        font-weight: bold;
        margin: 24px 10px;
        color: ${props => props.theme.gray4};
    }
`