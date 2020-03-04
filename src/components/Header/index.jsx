import React from "react";
import styled from "styled-components";
import Logo from "./logo.svg";
import {
  Link
} from "react-router-dom";
const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #f5e7d8;
`;
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  padding: 0rem 2rem;
`;
const HeaderLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & img{
        width: 4rem;
        height: 4rem;
    }
`;
const HeaderItems = styled.div`
  display: flex;
`;
const HeaderItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative
  a {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & :hover::before {
        background-image: linear-gradient(to left, #ff8a00, #e52e71);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
      }
  }
`;
class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderLogo>
            <img src={Logo} />
          </HeaderLogo>
          <HeaderItems>
            <HeaderItem>
              <Link to="/Sop">
                <div>SOP</div>
              </Link>
            </HeaderItem>
            <HeaderItem>
              <a href>
                <div>LOR</div>
              </a>
            </HeaderItem>
            <HeaderItem>
              <a href>
                <div>JOBS</div>
              </a>
            </HeaderItem>
          </HeaderItems>
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}
export default Header;
