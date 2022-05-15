import styled from 'styled-components';
import products from './data';
import Product from './Product';

export default function List () {

    return (
        <Container>
            { products.map((value, index) => (
                <Product
                    key={index} 
                    name={value.name}
                    imageUrl={value.imageUrl}
                    description={value.description}
                    listPrice={value.listPrice}
                    price={value.price}
                />
            )) }
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`
