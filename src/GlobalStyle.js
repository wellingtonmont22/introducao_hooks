import { createGlobalStyle } from 'styled-components';
import backgroundImg from './assets/pexels-aleksandar-pasaric-325185.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: url(${backgroundImg}) center no-repeat;
        background-size: cover;
    }
`;

