import React from "react";
import styled from "styled-components";
import { AiOutlineCloudUpload, AiOutlineEdit } from "react-icons/ai";
const AvatarStyled = styled.div`
  border-radius: 1em;
  background-color: #fff;
  box-shadow: 0px 5px 5px 1px rgba(179, 179, 179, 0.188);
  padding-bottom: 0.5em;
  position: relative;
  .avatar-bg {
    height: 350px;
    overflow: hidden;
    .avatar-bg-edit {
      border-radius: 0.8em;
      align-items: center;
      display: flex;
      top: 55%;
      right: 2em;
      position: absolute;
      color: #333;
      padding: 0.5em 1em;
      background-color: #fff;
      span {
        font-size: 1.4em;
        margin-right: 1em;
      }
    }
    img {
      border-radius: 1em;
      width: 100%;
    }
  }
  .avatar {
    span {
      position: absolute;
      bottom: 40%;
      left: 10em;
      background-color: #fff;
      padding: 0.5em;
      border-radius: 50%;
      z-index: 100;
    }
    img {
      border: 0.2em solid #fff;
      position: absolute;
      top: 45%;
      left: 2em;
      border-radius: 50%;
      width: 150px;
    }
    .avatar-text {
      display: flex;
      justify-content: space-between;
      margin: 2.5em;
      .avatar-text-content {
        text-align: center;
        p {
          font-size: 1.5em;
        }
        i {
          color: #8e8e8e;
        }
      }
      .avatar-text-edit {
        button {
          border-radius: 0.8em;
          padding: 0.5em 1em;
          color: #fff;
          background-color: var(--main-color);
        }
      }
    }
  }
`;
export default function Avatar({ img }) {
  return (
    <AvatarStyled>
      <div className="avatar-bg">
        <img src={img.image} alt="" />
        <button className="avatar-bg-edit">
          <span>
            <AiOutlineCloudUpload></AiOutlineCloudUpload>
          </span>
          Edit photo
        </button>
      </div>
      <div className="avatar">
        <span>
          <AiOutlineCloudUpload></AiOutlineCloudUpload>
        </span>
        <img src={img.image} alt="" />
        <div className="avatar-text">
          <div className="avatar-text-content">
            <p>Trần Tiến Đạt</p>
            <i>Web developer</i>
          </div>
          <div className="avatar-text-edit">
            <span>
              <AiOutlineEdit></AiOutlineEdit>
            </span>
            <button>Edit profile</button>
          </div>
        </div>
      </div>
    </AvatarStyled>
  );
}
