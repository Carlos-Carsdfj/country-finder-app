import styled, { createGlobalStyle } from 'styled-components';

export const MyComponent = styled.div`
  color: ${props => props.theme.colors.main};
`;

export const MyGlobalStyle = createGlobalStyle`

  body {
  
  --primary-color:${props => props.colors.primary};
  --secundary-color:${props => props.colors.secundary};
  --borde-color:${props => props.colors.borde};
  --card-color:${props => props.colors.card};
  --text-color:${props => props.colors.text};
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-image: url(${props => props.img});
  background-repeat: repeat;
  }
`;