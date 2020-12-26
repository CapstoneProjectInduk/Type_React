import React, { Dispatch, Fragment, SetStateAction } from "react";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "./AuthContainer";

export interface IProps {
  //Types
  //Container에서 오는 Props들의 타입들을 정의해줌
  userData: {
    studentId: string;
    password: string;
  };
  setUserData: Dispatch<
    SetStateAction<{ studentId: string; password: string }>
  >;
  onSubmit: () => void;

  form: string;
  setForm: Dispatch<SetStateAction<string>>;

  joinData: {
    studentId: string;
    password: string;
    firstName: string;
    lastName: string;
  };
  setJoinData: Dispatch<
    SetStateAction<{
      studentId: string;
      password: string;
      firstName: string;
      lastName: string;
    }>
  >;
}
/*Presenter는 View만 보여주는 단임 */
const AuthPresenter: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      {props.form === LOGIN_ACTION && (
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
            backgroundColor={"#f2f2f2"}
            border={""}
            borderRadius={"10px"}
            flexDirection={"column"}
          >
            <Input
              placeholder={"학번"}
              padding={"15px"}
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
              placeholder={"비밀번호"}
              type={"password"}
              width={"250px"}
              margin={"20px"}
              padding={"15px"}
              value={props.userData.password}
              onChange={(e) => {
                props.setUserData({
                  ...props.userData,
                  password: e.target.value,
                });
              }}
            />

            <Button onClick={props.onSubmit}>로그인</Button>

            <Button onClick={() => props.setForm(JOIN_ACTION)}>회원가입</Button>
          </Box>
        </Wrapper>
      )}
      {props.form === JOIN_ACTION && (
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
            backgroundColor={"#f2f2f2"}
            border={""}
            borderRadius={"10px"}
            flexDirection={"column"}
          >
            <Input
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
              placeholder={"비밀번호"}
              type={"password"}
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
              placeholder={"성"}
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
              placeholder={"비밀번호"}
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

            <Button onClick={props.onSubmit}>회원가입</Button>

            <Button onClick={() => props.setForm(LOGIN_ACTION)}>로그인</Button>
          </Box>
        </Wrapper>
      )}
    </Fragment>
  );
};

export default AuthPresenter;
