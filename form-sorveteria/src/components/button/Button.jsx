import styled from "styled-components"

export const Button = () => {
    return(
        <Input type="submit" value="Enviar" />
    )
}
    const Input = styled.input`
        background-color: #6dd3e1;
        width: 10vw;
        height: 4vh;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: #036ec0;
            transform: scale(105%);
        }

    `


export default Button