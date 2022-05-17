import React, { useContext } from 'react';
import styled from 'styled-components'
import SidebarContext from '../../contexts/SidebarContext'

export default function SidebarMobile () {

    const {sidebarMobile, setSidebarMobile} = useContext(SidebarContext);

    return (
        <Container>

        </Container>
    )

    
}

const Container = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    width: 60vw;
    margin: 0 0;
    z-index: 20;
`