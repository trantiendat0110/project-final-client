import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import { getPostAll } from "@/services/PostService";
const ListPostStyled = styled.div``;

export default function ListPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostAll().then((data) => setPosts(data));
  }, []);
  return (
    <ListPostStyled>
      {posts.length >= 1
        ? posts.map((post) => {
            return <Post key={post.post_id} post={post}></Post>;
          })
        : ""}
    </ListPostStyled>
  );
}
