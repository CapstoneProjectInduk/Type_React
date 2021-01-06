import React, { Fragment, MutableRefObject } from "react";
import styled from "styled-components";
import { img } from "../../ImgData";
import { MuiContainer, useStyles } from "./styles";

import { FeedCard } from "../../components/feed";
import { IProps } from "./types";
const Overlay = styled.div`
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`;

//

const FeedPresetner = (props: IProps) => {
  return (
    <Fragment>
      {props.loading ? <Overlay /> : null}
      <MuiContainer maxWidth="sm" ref={props.scrollEl}>
        {img.map((feed, index) => {
          if (props.count > index) {
            return <FeedCard key={index} />;
          }
        })}
      </MuiContainer>
    </Fragment>
  );
};

export default FeedPresetner;
