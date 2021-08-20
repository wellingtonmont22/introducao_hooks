

export const getQuote = () => 
fetch('http://127.0.0.1:3000/quotes/1').then((response) => response.json());