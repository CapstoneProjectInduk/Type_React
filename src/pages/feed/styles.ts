import {
  Box,
  Card,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import styled from "styled-components";

export const MuiContainer = styled(Container)`
  height: 100vh;
  overflow-y: scroll;
`;

export const MuiCard = styled(Card)`
  width: 100%;
  max-height: 700px;
  min-height: 400px;
  margin-top: 24px;
`;

export const MuiBox = styled(Box)`
  height: 70px;
  border-bottom: 1px solid #eee;
`;

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    header: {
      display: "flex",
      alignItems: "center",
      padding: 10,
      borderBottom: `1px solid #eee`,
    },
    user_box: {
      display: "flex",
      width: 200,
    },
    avatar: {
      height: 30,
      width: 30,
      borderRadius: "70%",
      border: "1px solid #eee",
    },
    image: {
      height: 0,
      paddingTop: "100%",
      //   width: "100%",
      //   height: 350,
      backgroundPosition: "center center",
      backgroundSize: "cover",
    },
    btn_box: {
      padding: 10,
    },
  });
});
