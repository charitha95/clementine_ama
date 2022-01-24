import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import Button from "./Button";

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
`;

const btnCSS = css``;

const dnwBtn = css``;

const Start = ({ props }) => {
  const startQuiz = () => props(true);

  return (
    <Intro>
      <h2>Want to read the AMA?</h2>
      <Link to="/files/ama.pdf" target="_blank" download className="downbtn">
        Download
      </Link>
      <h1>OR</h1>
      <h2 className="mar">Take the quiz.</h2>
      {/* <h4>Whenever, you want.</h4> */}
      <Button onClick={startQuiz} css={btnCSS}>
        Begin
      </Button>
    </Intro>
  );
};

export default Start;
