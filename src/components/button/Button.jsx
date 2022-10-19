import styled from "styled-components"

export const Button = () => {
    return(
        <Input type="submit" value="Enviar" />
    )
}
    const Input = styled.input`
        background-color: #6dd3e1;
        width: 40%;
        height: 4vh;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        transition: 200ms ease-in-out;

        &:hover {
            background: linear-gradient(45deg, #8228FA, #2D47FA, #2EDBFA);
            transform: scale(105%);
        }

        @media (max-width: 500px) {
            width: 40%;
            height: 100vh;
        }

    `


export default Button