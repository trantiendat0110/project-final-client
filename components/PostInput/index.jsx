import React, { useId, useState } from "react";
import styled from "styled-components";
import { AiOutlineFileImage, AiOutlineVideoCameraAdd, AiOutlineFileAdd } from "react-icons/ai";
import { addPost } from "@/services/PostService";
import { v4 } from "uuid";
import Form from "./Form";

const PostInputStyled = styled.div`
  background-color: #fff;
  margin: 1em;
  padding: 2em;
  border-radius: .5em;
  box-shadow: 0 0 5px 1px #c0bfbfa2;
  .showForm {
    width: 100%;
    display: flex;
    gap: 1em;
    button {
      color: #65675b;
      background-color: #ececec;
      width: 100%;
      border-radius: .5em;
      padding: 0 1em;
      p {
        text-align: start;
      }
      &:hover {
        background-color: #d4d4d4;
      }
    }

    img {
      border-radius: 50%;
    }
  }
  .sub {
    margin-top: 2em;
    display: flex;
    justify-content: space-between;
    span {
      color: var(--text-color);
      font-size: 1.2em;
      display: flex;
      align-items: center;
      margin: 0 2em;
      cursor: pointer;
      p {
        padding-left: 1em;
      }
    }
    button {
      background-color: var(--main-color);
      color: #fff;
      padding: 0.5em 1em;
      border-radius: 1em;
    }
  }
`;
export default function PostInput() {
  const [form, setForm] = useState(false);
  
  return (
    <PostInputStyled>
      {form && <Form setForm={setForm} form={form}></Form>}
      <div className="showForm">
        <img
          width="50px"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
        <button onClick={() => setForm(!form)}><p>What felling</p></button>
      </div>
      <div className="sub">
        <span onClick={() => setForm(!form)}>
          <AiOutlineFileImage></AiOutlineFileImage>
          <p>Photo/video</p>
        </span>
        <span onClick={() => setForm(!form)}>
          <AiOutlineVideoCameraAdd></AiOutlineVideoCameraAdd>
          <p>Live video</p>
        </span>
        <span onClick={() => setForm(!form)}>
          <AiOutlineFileAdd></AiOutlineFileAdd>
          <p>Your file</p>
        </span>
      </div>
    </PostInputStyled>
  );
}
