import React from "react";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { IProps } from "../../pages/auth/AuthPresenter";
import { JOIN_ACTION, LOGIN_ACTION } from "../../pages/auth/AuthContainer";

const JoinForm = (props: IProps) => {
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
        width={"500px"}
        height={"650px"}
        backgroundColor={"#fff"}
        border={""}
        borderRadius={"5px"}
        flexDirection={"column"}
      >
        <Input
          borderRadius={"5px"}
          backgroundColor="#e9e9e9"
          placeholder={"학번"}
          padding={"15px"}
          width={"250px"}
          value={props.joinData.studentId}
          onChange={(e) => {
            props.setJoinData({
              ...props.joinData,
              studentId: e.target.value,
            });
          }}
        />
        <Input
          borderRadius={"5px"}
          placeholder={"비밀번호"}
          type={"password"}
          backgroundColor="#e9e9e9"
          width={"250px"}
          margin={"20px"}
          padding={"15px"}
          value={props.joinData.password}
          onChange={(e) => {
            props.setJoinData({
              ...props.joinData,
              password: e.target.value,
            });
          }}
        />
        <Input
          borderRadius={"5px"}
          placeholder={"성"}
          backgroundColor="#e9e9e9"
          padding={"15px"}
          width={"250px"}
          value={props.joinData.firstName}
          onChange={(e) => {
            props.setJoinData({
              ...props.joinData,
              firstName: e.target.value,
            });
          }}
        />
        <Input
          borderRadius={"5px"}
          placeholder={"이름"}
          backgroundColor="#e9e9e9"
          type={"password"}
          width={"250px"}
          margin={"20px"}
          padding={"15px"}
          value={props.joinData.lastName}
          onChange={(e) => {
            props.setJoinData({
              ...props.joinData,
              lastName: e.target.value,
            });
          }}
        />

        <Button
          padding="10px"
          borderRadius={"5px"}
          width={"250px"}
          backgroundColor={"#0095F6"}
          border="1px solid #eeeeee"
          color={"#fff"}
          margin={"50px 0 0 0 "}
          onClick={(e) => props.onSubmit(e, JOIN_ACTION)}
        >
          회원가입
        </Button>

        <Button
          padding="10px"
          borderRadius={"5px"}
          backgroundColor={"inherit"}
          width={"250px"}
          border="none"
          color={"#0095F6"}
          onClick={() => props.setForm(LOGIN_ACTION)}
        >
          로그인하로 가기
        </Button>
      </Box>
    </Wrapper>
  );
};

export default JoinForm;
