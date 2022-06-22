import styled from "styled-components";

export const Poster = styled.img` 
  height: 85%;
  width: 100%;
`
export default Poster

export const FilmTitle = styled.h2` 
color: #333;
height: 30px;
font-size:20px;
padding: 10px;  
`

export const CardFilm = styled.li` 
 display: flex;
 flex-direction: column;
  height: 100%;
width: 100%;
border-radius: 5px;
overflow: hidden;
background-color:#bdb9a6;
  box-shadow: -2px -2px 7px rgb(109, 109, 109);
transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
:hover {
    transform: scale(1.03);
  }
`
