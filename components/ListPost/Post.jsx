import React from "react";
import styled from "styled-components";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import InputComment from "./InputComment";
const PostStyled = styled.div`
box-shadow: 0 0 5px 1px #cccccc6e;
  background-color: #fff;
  border-radius: .5em;
  margin: 2em 1em;
  padding: 2em;
  .post-title {
    display: flex;
    justify-content: space-between;
    .post-title-prf {
      align-items: center;
      display: flex;
      .post-title-prf-text {
        margin-left: 1em;
        display: flex;
        flex-direction: column;
        .post-title-prf-text-time {
          color: #7b7b7b;
        }
      }
      img {
        width: 50px;
        border-radius: 50%;
      }
    }
    .post-title-handle {
      font-size: 1.4em;
    }
  }
  .post-content {
    margin: auto;
    img {
      width: 100%;
      border-radius: 1em;
    }
    .post-content-text {
      margin: 2em 0 1em 0;
    }
  }
  .post-views {
    color: #7b7b7b;
    padding: 2em 0em;
    flex-direction: row-reverse;
    display: flex;
    gap: 2em;
  }
  .post-tools {
    padding: 1em 0;
    border-bottom: solid 1px #ccc;
    border-top: solid 1px #ccc;
    justify-content: space-between;
    display: flex;
    span {
      color: var(--text-color);
      gap: 1em;
      align-items: center;
      display: flex;
    }
  }
`;
export default function Post({post}) {
  return (
    <PostStyled>
      <div className="post-title">
        <div className="post-title-prf">
          <img
            width={"50px"}
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
          <p className="post-title-prf-text">
            <span className="post-title-prf-text-name">Trần Tiến Đạt</span>
            <span className="post-title-prf-text-time">15h</span>
          </p>
        </div>
        <div className="post-title-handle">
          <BsThreeDots></BsThreeDots>
        </div>
      </div>
      <div className="post-content">
        <div className="post-content-text">
          <p>{post.content}</p>
        </div>
        <img loading="lazy" src="https://cdn.pixabay.com/photo/2017/09/02/17/57/rose-2708053__340.jpg" alt="" />
      </div>
      <div className="post-views">
        <p>20 Shared</p>
        <p>3 Comments</p>
      </div>
      <div className="post-tools">
        <span>
          <AiOutlineLike size={"1.5em"}></AiOutlineLike>Like
        </span>
        <span>
          <AiOutlineComment size={"1.5em"}></AiOutlineComment>Comment
        </span>
        <span>
          <AiOutlineShareAlt size={"1.5em"}></AiOutlineShareAlt>Share
        </span>
      </div>
      <InputComment></InputComment>
    </PostStyled>
  );
}
