import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const TitleFilm = styled.h1`
color: #2e2e33;
display: flex;
justify-content: center;
margin-bottom: 20px;
background-color: #1717ad21;
padding: 10px;
`

export const BigPoster = styled.img`
margin: 0;
`

export const BoxPoster = styled.div`
display: flex;
`

export const Overview = styled.div`
padding: 15px;
`

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
