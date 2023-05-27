import React from "react";
import styled from "styled-components";
import { BsGenderAmbiguous, BsCalendarDate, BsPhone } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";
const IntroStyled = styled.div`
  width: 200px;
  background-color: #fff;
  padding: 2em;
  border-radius: 1em;
  margin: 1em;
  height: fit-content;
  p {
    align-items: center;
    display: flex;
    span {
      padding: 2em 1em;
    }
  }
  button {
    background-color: var(--bg-color);
    margin: auto;
    display: block;
    padding: 0.5em 1em;
    border-radius: 1em;
    transition: all 0.2s ease-in;
    &:hover {
      color: #fff;
      background-color: var(--main-color);
    }
  }
`;
export default function Intro() {
  return (
    <IntroStyled>
      <p>
        <span>
          <BsGenderAmbiguous></BsGenderAmbiguous>
        </span>
        Nam
      </p>
      <p>
        <span>
          <BiLocationPlus></BiLocationPlus>
        </span>
        Quảng trị
      </p>
      <p>
        <span>
          <BsCalendarDate></BsCalendarDate>
        </span>
        01/10/2002
      </p>
      <p>
        <span>
          <BsPhone></BsPhone>
        </span>
        0333744436
      </p>
      <button>Edit profile</button>
    </IntroStyled>
  );
}
