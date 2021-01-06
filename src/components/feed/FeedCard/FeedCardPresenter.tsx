import React from "react";
import { img } from "../../../ImgData";
import {
  MuiBox,
  MuiCard,
  MuiContainer,
  useStyles,
} from "../../../pages/feed/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import {
  Box,
  CardMedia,
  Grid,
  IconButton,
  Input,
  Typography,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

interface ICard {
  fill: boolean;
  comment?: string[];
  text: string;
  toggleLike: () => void;
  makeComment: () => void;
  handleCommentText: (_: string) => void;
}

const FeedCardPresenter = (props: ICard) => {
  const classes = useStyles();
  return (
    <MuiCard>
      <Grid className={classes.header} container alignItems="center">
        <Grid xs={3} className={classes.user_box} alignItems="center">
          <Box className={classes.avatar} />
          <Typography
            style={{
              marginLeft: 10,
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ fontSize: 14 }}>배진우</span>
            <span style={{ fontSize: 12 }}>서울</span>
          </Typography>
        </Grid>
        <Grid xs={9} container justify="flex-end">
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
      <CardMedia className={classes.image} image={`${img[0].src}`} />
      <Grid container className={classes.btn_box}>
        <Grid container xs={4} wrap="nowrap">
          {props.fill ? (
            <IconButton style={{ padding: 5 }} onClick={props.toggleLike}>
              <Favorite style={{ fill: "red" }} />
            </IconButton>
          ) : (
            <IconButton style={{ padding: 5 }} onClick={props.toggleLike}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
          <IconButton style={{ padding: 5 }}>
            <ChatBubbleOutlineIcon />
          </IconButton>
        </Grid>
        <Grid xs={4}></Grid>
        <Grid container justify={"flex-end"} xs={4}>
          <IconButton style={{ padding: 5 }}>
            <TurnedInNotIcon />
          </IconButton>
        </Grid>
      </Grid>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.makeComment();
        }}
      >
        <Input
          value={props.text}
          onChange={(e) => props.handleCommentText(e.target.value)}
        />
      </form>
      {props.comment.map((item) => {
        return <span>{item}</span>;
      })}
    </MuiCard>
  );
};

export default FeedCardPresenter;
