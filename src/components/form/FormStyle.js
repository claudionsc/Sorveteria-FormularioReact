import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const FormStyle = createGlobalStyle`
    #form {
        background-color: #D6FAE9;
        padding: 20px;
        width: 20vw;
        max-height: 30vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 5px;
        margin-top: 10px;

    }

`

export const SaboresForm = styled.label`
    background-color: #A4BFB3;
    color: white;
    border-radius: 5px;
    width: 80%;
    padding: 5px;
    margin-bottom: 5px;
    transition: ease-in-out 200ms;

    &:hover{
        background-color: yellowgreen;
        
    }

`

export const Casquinha = styled.label`
    background-color: #A4BFB3;
    color: white;
    border-radius: 5px;
    width: 80%;
    padding: 5px;
    margin-bottom: 5px;
    &:hover{
        background-color: yellowgreen;
        
    }


`

export const Colher = styled.label`
    background-color: #A4BFB3;
    color: white;
    border-radius: 5px;
    width: 80%;
    padding: 5px;
    margin-bottom: 10px;
    &:hover{
        background-color: yellowgreen;
        
    }


`