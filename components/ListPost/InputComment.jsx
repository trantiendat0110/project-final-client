import React from "react";
import styled from "styled-components";
import { BsCardImage, BsFillFileEarmarkPostFill, BsSend } from "react-icons/bs";
import { CiFaceSmile } from "react-icons/ci";
const InputCommentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1em;
  margin: 1em 0;
  align-items: center;
  img {
    border-radius: 50%;
  }
  .input {
    flex: 1;
    position: relative;
    text-align: center;
    input {
      background-color: var(--bg-color);
      border: 1px solid #ccc;
      outline: none;
      padding: 0.5em 1em;
      border-radius: 1em;
      width: 90%;
    }
    .comment-tool {
      gap: 1em;
      display: flex;
      top: 0.5em;
      right: 8%;
      position: absolute;
      span {
        font-size: 1.2em;
      }
    }
  }
  button {
    padding: 1em;
    color: #fff;
    border-radius: 1em;
    background-color: var(--main-color);
  }
`;
export default function InputComment() {
  return (
    <InputCommentStyled>
      <img
        width={"50px"}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
      <div className="input">
        <input type="text" placeholder="Comments ..."/>
        <div className="comment-tool">
          <span>
            <BsCardImage></BsCardImage>
          </span>
          <span>
            <CiFaceSmile></CiFaceSmile>
          </span>
          <span>
            <BsFillFileEarmarkPostFill></BsFillFileEarmarkPostFill>
          </span>
        </div>
      </div>
      <button>
        <BsSend></BsSend>
      </button>
    </InputCommentStyled>
  );
}
