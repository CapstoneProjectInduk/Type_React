import React from "react";
import { JOIN_ACTION, LOGIN_ACTION } from "../../pages/auth/AuthContainer";
import { IProps } from "../../pages/auth/AuthPresenter";
import { Box, Button, Input, Wrapper } from "../../styles/styles";

const LoginForm = (props: IProps) => {
  return (
    <Wrapper
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#1f5785"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"450px"}
        height={"500px"}
        backgroundColor={"#fff"}
        border={""}
        borderRadius={"5px"}
        flexDirection={"column"}
      >
        <Input
          borderRadius={"5px"}
          placeholder={"학번"}
          padding={"15px"}
          backgroundColor={"#e9e9e9"}
          width={"250px"}
          value={props.userData.studentId}
          onChange={(e) => {
            props.setUserData({
              ...props.userData, //... spread연산자 , Obejct나 Array의 데이터들을 얕은 복사를 해줌,
              studentId: e.target.value,
            });
          }}
        />
        <Input
          borderRadius={"5px"}
          placeholder={"비밀번호"}
          backgroundColor={"#e9e9e9"}
          type={"password"}
          width={"250px"}
          margin={"20px"}
          padding={"15px"}
          name={"login.password"}
          value={props.userData.password}
          onChange={(e) => {
            props.setUserData({
              ...props.userData,
              password: e.target.value,
            });
          }}
        />

        <Button
          padding="10px"
          borderRadius={"5px"}
          width={"250px"}
          margin={"50px 0 0 0 "}
          backgroundColor={"#0095F6"}
          border="1px solid #eeeeee"
          color={"#fff"}
          onClick={(e) => props.onSubmit(e, LOGIN_ACTION)}
        >
          로그인
        </Button>

        <Button
          padding="10px"
          borderRadius={"5px"}
          width={"250px"}
          backgroundColor={"inherit"}
          border="none"
          color={"#0095F6"}
          margin={"5px 0px"}
          onClick={() => props.setForm(JOIN_ACTION)}
        >
          회원가입하러 가기
        </Button>
      </Box>
    </Wrapper>
  );
};

export default LoginForm;
