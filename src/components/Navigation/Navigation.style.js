import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &.active {
    color: #2196f3;
  }
`;

export const Header = styled.header`
background-color: #5b5b94;
display: flex;
min-height: 60px;
border-bottom: solid 2px #28282b;
align-items: center;
`

export const Conteiner = styled.div`
margin: 0 auto;
width: 900px;
`
export const Content = styled.main`
flex-grow: 3;
padding: 20px 15px;
`
export const Pages = styled.div`
display: flex;
flex-direction: column;
overflow: hidden;
min-height: 100vh;
`
export const Footer = styled.footer`
background-color: #5b5b94;
display: flex;
min-height: 60px;
border-top: solid 2px #28282b;
align-items: center;
`

export const DateWork = styled.footer`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
`


export const BoxFilms = styled.ul` 
 display: grid;
/* max-width: calc(100vw - 48px); */
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
grid-gap: 16px;
margin-top: 30px;
margin-bottom: 20px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;
min-height: 100%;
max-width: 1400px;
`