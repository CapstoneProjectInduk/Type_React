import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";

export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";
/*Container는 state를 다루거나 여러가지 이벤트 로직들을 담는 부분 */
const AuthContainer = () => {
  const [form, setForm] = useState(LOGIN_ACTION); //로그인 & 회원가입 State 변경으로 입력Form 변경

  //기본적으로 state의 데이터들은 set할시 기존에 있던 값에 대입하는게 아니라 새로운 데이터로 대체함.(그래서 ...spread 연산자를 많이 사용함)
  const [userData, setUserData] = useState({
    //로그인 state 데이터, setUserData는 userData를 바꾸는 setState 라는 리액트 함수임
    studentId: "",
    password: "",
  });

  const [joinData, setJoinData] = useState({
    //회원가입 데이터
    studentId: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const onSubmit = () => {
    console.log("submitData", userData);
    console.log("joinData", joinData);
  };

  return (
    <AuthPresenter
      userData={userData} //Props
      setUserData={setUserData} //Props
      onSubmit={onSubmit} //Props
      form={form} //Props
      setForm={setForm} //Props
      joinData={joinData} //Props
      setJoinData={setJoinData} //Props
    />
  );
};

export default AuthContainer;
