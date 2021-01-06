import React, { Fragment } from "react";
import styled from "styled-components";
import { Input } from "../../styles/styles";

const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 54px;
  display: flex;
  padding: 0px 120px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  border-bottom: 2px solid #eee;
`;

const Container = styled.div`
  margin-top: 54px;
  padding: 0px 120px;
`;

const LogoBox = styled.div``;

const SearchBox = styled.div``;

const MenuBox = styled.div``;

const LayoutPrsenter: React.FC = (props) => {
  return (
    <Fragment>
      <Header>
        <LogoBox>
          <img
            style={{ width: 103 }}
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          />
        </LogoBox>
        <SearchBox>
          <Input width={"200px"} height={"27px"} backgroundColor={"#eee"} />
        </SearchBox>
        <MenuBox>3</MenuBox>
      </Header>
      <Container> {props.children}</Container>
    </Fragment>
  );
};

export default LayoutPrsenter;
