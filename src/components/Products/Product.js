import styled from 'styled-components';
import Button from '../shared/Button';

export default function Product ({
    name,
    imageUrl,
    description,
    listPrice,
    price,
}) {

    const discount =
    listPrice !== price ? (((price - listPrice)/price) * 100) : null;


    return (
        <Container>
            { discount ? <Badge>{discount}%</Badge> : null}
            <img src={imageUrl} alt={name} />
            <div>
                { description }
            </div>
            <div>
            { !discount ? 
                (<Price>R$ {(listPrice/100).toFixed(2)}</Price>) : 
                (<Discount>

                    <span>
                        R$ {(price/100).toFixed(2)}
                    </span>
                    <span>
                        R$ {(listPrice/100).toFixed(2)}
                    </span>
                    
                </Discount>)
                }
            </div>
            <ActionContainer>
                <Button>Comprar</Button>
            </ActionContainer>
            
        </Container>
    )
}

const Container = styled.div`
    flex: 1 0 30%;
    margin: 30px 0;
    position: relative;
    max-width: 410px;
    
    img {
        max-width: 380px;
    }

    img:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`

const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    font-weight: bold;
    font-size: 18px;
    padding: 0 4px;
`
const Discount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    
    span:first-child {
        text-decoration: line-through;
        padding: 0 4px;
    }
    
    span:last-child {
        font-weight: bold;
        font-size: 18px;
        padding: 0 4px;
    }
`

const Badge = styled.div`
    background-color: #06d6a0;
    position: absolute;
    height: 40px;
    width: 40px;
    z-index: 1;
    top: 0;
    right: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`

const ActionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`