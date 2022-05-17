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
    background-color: white;
`