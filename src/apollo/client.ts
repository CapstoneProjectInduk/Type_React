import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import jwt from "jsonwebtoken";

interface IValid {
  isValid: boolean;
}
declare var process: {
  env: {
    REACT_APP_VALID: string;
  };
};
type IToken = string;
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLogin: {
          read: (_, { variables }) => {
            const token = localStorage.getItem("ACCESS_TOKEN") as IToken;
            try {
              var decoded = jwt.decode(token, { complete: true });
              if (decoded === null) localStorage.removeItem("ACCESS_TOKEN");

              return !!decoded;
            } catch {
              localStorage.removeItem("ACCESS_TOKEN");
              return false;
            }
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "http://1.231.176.58:4000/graphql",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("나중에 토큰 넣을곳")}`,
  },
  cache: cache,
});
