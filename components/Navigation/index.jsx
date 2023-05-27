import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ListLink from "./ListLink";
import { logout } from "../../services/AuthService";
import Cookies from "js-cookie";
import Link from "next/link";
const NavigationStyled = styled.nav`
  position: fixed;
  background-color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  width: 12em;
  .logo-text {
    margin: 2em 0;
    text-align: center;
    font-family: cursive;
    font-weight: bold;
    font-size: 1.5em;
  }
  button {
    background-color: var(--main-color);
    margin-top: 2em;
    padding: 1em;
    border-radius: 2em;
    color: #fff;
    transition: all 0.2s;
    &:hover {
      background-color: #160077;
    }
  }
`;
export default function Navigation() {
  const [currentUrl, setCurrentUrl] = useState();
  const [currentUser, setCurrentUser] = useState();
  const handleLogout = () => {
    logout();
  };
  useEffect(() => {
    setCurrentUser(Cookies.get("user_id"));
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.pathname);
    }
  });
  const lists = [
    { text: "Home", url: "/" },
    { text: "My profile", url: "/profile/" + currentUser },
    { text: "Setting", url: "/setting" },
  ];
  return (
    <NavigationStyled>
      <Link className="logo-text" href='/'>SOCIAL MEDIA</Link>
      <ListLink currentUrl={currentUrl} setCurrentUrl={setCurrentUrl} lists={lists}></ListLink>
      <button onClick={handleLogout}>Logout</button>
    </NavigationStyled>
  );
}
