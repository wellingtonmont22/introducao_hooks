import { string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 1.5em;
    background: red;
    color: white;
    border: 2px solid blue;
    border-radius: 6px;
    padding: 10px 20px;
    font-family: 'Times New Roman', Times, serif;
    cursor: pointer;
    

    :hover {
        box-shadow: black 3px 3px;
    }
`;


export default Button;