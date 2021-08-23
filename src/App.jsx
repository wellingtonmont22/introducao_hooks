import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import photo from "./assets/spiderman5.png";
import { Quotes } from "./components";
import { getQuote } from "./services/quotesService";
import spiderSound from "./sounds/spider_man_web_shot.mp3";

const audio = new Audio(spiderSound);

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
  let isMounted = useRef(true);

  const [quoteState, setQuoteState] = useState({
    quote: "loading quote...",
    speaker: "loading speaker...",
  });

  const onUpdate = async () => {
    const quote = await getQuote();

    if(isMounted.current){
      audio.play();

      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    }
  }, []);

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
