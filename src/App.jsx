import React, { useState } from "react";
import styled from "styled-components";
import photo from "./assets/spiderman5.png";
import { Quotes } from "./components";
import { getQuote } from "./services/quotesService";

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;

const App = () => {
  const [quoteState, setQuoteState] = useState({
    quote: "ok",
    speaker: "Speaker",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    setQuoteState(quote);
  };
  return (
    <Content>
      <Quotes
        {...quoteState}
        onUpdate={onUpdate}
      />
      <Image src={photo} alt="nada" width="100%" height="400px" />
    </Content>
  );
};

export default App;
