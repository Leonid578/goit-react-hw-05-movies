import styled from "styled-components";

export const SerchForm = styled.form` 
display: flex;
align-items: center;
justify-content: center;
`

 export const SerchButton = styled.button`
background-color: transparent;
width: 30px;
height: 30px;
border: none;
opacity: 0.8;
:hover {
    opacity: 1;
    cursor: pointer;
  }
` 

export const InputWord = styled.input`
height: 30px;
display: flex;
margin-left: 10px;
padding: 2px 10px;
border-radius: 7px;
box-shadow: 1px 1px 10px rgb(220, 187, 228);
color: rgb(123, 59, 207);
font: inherit;`

export const BoxFilms = styled.ul` 
 display: grid;
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

