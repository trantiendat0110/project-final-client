import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiOutlineUserAdd,
  AiOutlineSmile,
  AiOutlineGif,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { GiEarthAsiaOceania, GiPositionMarker } from "react-icons/gi";
import { BsFillImageFill } from "react-icons/bs";
import { addPost } from "@/services/PostService";
import { v4 } from "uuid";
import Cookies from "js-cookie";
const FormStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  right: 0;
  bottom: 0;
  z-index: 1000;
  form {
    z-index: 1000;
    position: absolute;
    border-radius: 1em;
    height: 60%;
    width: 33%;
    left: 34%;
    top: 20%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    .form-header {
      position: relative;
      border-bottom: 1px solid #ccc;
      p {
        margin: auto;
        line-height: 2em;
        padding: 0.5em;
        text-align: center;
      }
      span {
        font-size: 1.5em;
        position: absolute;
        right: 0;
        top: 0;
        padding: 0.2em;
        margin-right: 0.5em;
        margin-top: 0.2em;
        border-radius: 50%;
        background-color: #e4e6eb;
        color: #626262;
      }
    }
    .form-body {
      height: calc(100% - 48px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1em;
      .form-body-profile {
        display: flex;
        img {
          border-radius: 50%;
          margin-right: 1em;
        }
        p {
          font-weight: bold;
        }
        button {
          font-size: 0.8em;
          padding: 0.2em 0.2em;
          background-color: #e4e6eb;
          border-radius: 0.5em;
          display: flex;
          justify-content: space-between;
          span {
            padding: 0 0.5em;
            margin: auto;
          }
        }
      }
      .form-body-content {
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        display: flex;
        textarea {
          max-height: 160px;
          min-height: 160px;
          font-size: 1.5em;
          margin: 1em 0em;
          outline: none;
        }
        .form-body-content-file {
          font-weight: 600;
          padding: 0.5em;
          display: flex;
          border: 1px solid #ccc;
          margin-bottom: 1em;
          border-radius: 0.5em;
          justify-content: space-between;
          p {
            margin: auto 0;
            padding: 0 2em;
            text-align: center;
            cursor: pointer;
          }
          span {
            cursor: pointer;
            font-size: 1.5em;
            border-radius: 50%;
            padding: 5px;
            &:hover {
              background-color: #e0e0e0;
            }
            &:nth-child(2) {
              color: #00c200;
            }
            &:nth-child(3) {
              color: blue;
            }
            &:nth-child(4) {
              color: orange;
            }
            &:nth-child(5) {
              color: red;
            }
            &:nth-child(6) {
              color: #00c388;
            }
          }
        }
      }
      .form-submit {
        width: 100%;
        text-align: center;
        button {
          border-radius: 0.5em;
          padding: 0.5em 1em;
          background-color: #1b74e4;
          color: #f4f4f4;
          width: 100%;
          &:disabled {
            cursor: not-allowed;
            background-color: #ccc;
          }
        }
      }
    }
  }
  .container {
    background-color: #f4f4f4;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    z-index: 1000;
  }
`;
export default function Form({ setForm, form }) {
  const user_id = Cookies.get('user_id');
  const post_id = v4();
  const [contentPost, setContentPost] = useState("");
  const data = { user_id: user_id, post_id: post_id, content: contentPost, status: "ok" };
  const handleCreatePost = (e) => {
    addPost(data);
    setContentPost("");
    setForm(!form);
  };
  return (
    <FormStyled>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        action=""
      >
        <div className="form-header">
          <p>Create post</p>
          <span
            onClick={() => {
              setForm(!form);
            }}
          >
            <AiOutlineClose></AiOutlineClose>
          </span>
        </div>
        <div className="form-body">
          <div className="form-body-profile">
            <img
              width={"50px"}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
            />
            <div>
              <p>Trần Đạt</p>
              <button>
                <span>
                  <GiEarthAsiaOceania></GiEarthAsiaOceania>
                </span>
                <p>Công khai</p>
                <span>
                  <AiFillCaretDown></AiFillCaretDown>
                </span>
              </button>
            </div>
          </div>
          <div className="form-body-content">
            <textarea
              value={contentPost}
              onChange={(e) => {
                setContentPost(e.target.value);
              }}
              type="text"
              placeholder="Hey you, what your felling?"
            />
            <div className="form-body-content-file">
              <p>Add to your post</p>
              <span>
                <BsFillImageFill></BsFillImageFill>
              </span>
              <span>
                <AiOutlineUserAdd></AiOutlineUserAdd>
              </span>
              <span>
                <AiOutlineSmile></AiOutlineSmile>
              </span>
              <span>
                <GiPositionMarker></GiPositionMarker>
              </span>
              <span>
                <AiOutlineGif></AiOutlineGif>
              </span>
              <span>
                <AiOutlineEllipsis></AiOutlineEllipsis>
              </span>
            </div>
          </div>
          <div className="form-submit">
            <button
              disabled={contentPost === "" ? true : false}
              onClick={(e) => {
                handleCreatePost(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div
        onClick={(e) => {
          setForm(!form);
        }}
        className="container"
      ></div>
    </FormStyled>
  );
}
