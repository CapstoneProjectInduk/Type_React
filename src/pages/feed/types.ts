import { MutableRefObject } from "react";

export interface IProps {
  scrollEl: MutableRefObject<any>;
  handleScroll: () => void;
  count: number;
  loading: boolean;
}
