import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($studentId: String!, $password: String!) {
    login(studentId: $studentId, password: $password)
  }
`;

export const LOCAL_LOGIN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client {
      log
    }
  }
`;

//회원가입
export const JOIN = gql`
  mutation join(
    $studentId: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    join(
      studentId: $studentId
      password: $password
      firstName: $firstName
      lastName: $lastName
    ) {
      id
    }
  }
`;
