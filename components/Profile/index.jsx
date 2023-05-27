import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileImg from "./Avatar";
import Intro from "./Intro";
import PostInput from "../PostInput";
import Post from "../ListPost/Post";
import { getPostAll } from "@/services/PostService";
const ProfileStyled = styled.div`
  .content {
    border-radius: 1em;
    margin-top: 2em;
    background-color: var(--bg-color);
    display: flex;
    .profile-content-post {
      flex: 1;
    }
  }
`;

export default function Profile({ data }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostAll().then((posts) => setPosts(posts));
  }, []);
  return (
    <ProfileStyled>
      <ProfileImg img={data}></ProfileImg>
      <div className="content">
        <Intro></Intro>
        <div className="profile-content-post">
          <PostInput></PostInput>
          {posts.map((post) => {
            return <Post key={post.post_id} post={post}></Post>;
          })}
        </div>
      </div>
    </ProfileStyled>
  );
}
