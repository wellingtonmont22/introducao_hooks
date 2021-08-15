import React from "react";
import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from "../index";

const Quote = styled.p`
    font-size: 2em;
    flex: 1;
    margin: 0;
`;

const Speaker = styled(Quote)`
    text-align: right;
    margin-bottom: 40px;
`;

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Quotes = ({ quote, speaker, onUpdate }) => {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>quote bind</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
    quote: string,
    speaker: string,
    onUpdate: func
}

export default Quotes;
