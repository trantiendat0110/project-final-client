import Link from "next/link";
import React from "react";
import styled from "styled-components";
const ListLinkStyled = styled.div`
  .active {
    background-color: var(--main-color);
    color: #fff;
  }
  a {
    transition: all ease 0.4s;
    border-radius: 1em;
    margin-left: 0;
    display: flex;
    padding: 1em 1em;
    margin-bottom: 2em;
    background-color: var(--bg-color);
    span {
      font-size: 1.4em;
      padding: 0em 1em;
    }
    &:hover {
      box-shadow: 0 5px 5px 1px #abababac;
    }
  }
`;
export default function ListLink({ currentUrl, lists }) {
  return (
    <ListLinkStyled>
      {lists.map((item) => {
        return (
          <Link key={item.url} className={currentUrl === item.url ? "active" : ""} href={item.url}>
            {item.text}
          </Link>
        );
      })}
    </ListLinkStyled>
  );
}
