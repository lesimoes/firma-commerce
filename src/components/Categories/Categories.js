import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import categoryImages from './data';

export default function Categories() {
  return (
    <Container>
      {categoryImages.map((value, index) => (
        <Link to={`/${value.linkUrl}`} key={index}>
          <Item >
            <img src={value.imageUrl} alt={value.title} />
            <ItemContent>
              <h4>{value.title}</h4>
            </ItemContent>
          </Item>
        </Link>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  flex-grow: 1;
`;

const Item = styled.div`
  flex: 1;

  &:hover {
    cursor: pointer;

    & img {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      opacity: 0.9;
      border: 1px solid gray;
    }
  }

  img {
    width: 320px;
    height: 200px;
    object-fit: cover;
    border: 1px solid gray;
  }
`;

const ItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  opacity: 0.7;

  h4 {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;

    &:hover {
      opacity: 0.9;
    }
  }
`;
