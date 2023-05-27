import ListPost from "@/components/ListPost";
import PostInput from "@/components/PostInput";
import React from "react";
import styled from "styled-components";
const HomeStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 200px;
  .home-post {
    flex: 1;
    background-color: var(--bg-color);
    border-radius: .6em;
    margin: 0 2em;
    .home-post-input {
    }
  }
`;
export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies.token;
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  } else {
    return {
      props: { token: token },
    };
  }
};
export default function HomePage(props) {
  return (
    <HomeStyled>
      <div className="home-post">
        <PostInput></PostInput>
        <ListPost></ListPost>
      </div>
    </HomeStyled>
  );
}
