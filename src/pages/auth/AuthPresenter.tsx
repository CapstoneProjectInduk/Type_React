import React, { Dispatch, Fragment, SetStateAction } from "react";
import JoinForm from "../../components/auth/JoinForm";
import LoginForm from "../../components/auth/LoginForm";
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

  onSubmit: (e: any, action: string) => void; //이렇게 약속을하면

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

const AuthPresenter: React.FC<IProps> = (props) => {
  return (
    <Fragment>
      {props.form === LOGIN_ACTION && <LoginForm {...props} />}
      {props.form === JOIN_ACTION && <JoinForm {...props} />}
    </Fragment>
  );
};

export default AuthPresenter;
