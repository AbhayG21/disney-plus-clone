import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
      <Nav>
          <Logo
              src="/images/logo.svg"
              onClick={() => navigate("/")}
          />
          <NavMenu>
              <a>
                  <img src="/images/home-icon.svg" alt="" />
                  <span>HOME</span>
              </a>

              <a>
                  <img src="/images/search-icon.svg" alt="" />
                  <span>SEARCH</span>
              </a>

              <a>
                  <img src="/images/watchlist-icon.svg" alt="" />
                  <span>WATCHLIST</span>
              </a>

              <a>
                  <img src="/images/original-icon.svg" alt="" />
                  <span>ORIGINALS</span>
              </a>

              <a>
                  <img src="/images/movie-icon.svg" alt="" />
                  <span>MOVIES</span>
              </a>

              <a>
                  <img src="/images/series-icon.svg" alt="" />
                  <span>SERIES</span>
              </a>
          </NavMenu>
          <UserImg src="/images/tom.jpeg" onClick={() => navigate("login")} />
      </Nav>
  );
}

export default Header;
const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0px 36px;
`;
const Logo = styled.img`
  width: 80px;
  height: 50px;
  cursor: pointer;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 200ms cubic-bezier(0.25,0.46,0.45,0.94) 0s ;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;

      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
