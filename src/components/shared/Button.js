import styled from 'styled-components';

export default function Button ({ children }) {

    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    max-width: 200px;
    width: 140px;
    height: 26px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${props => props.theme.gray3};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;

    &:hover {
        color: white;
        background-color: ${props => props.theme.gray1};
        cursor: pointer;
    }
`