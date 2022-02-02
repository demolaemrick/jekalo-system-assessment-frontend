import { FC } from "react";
import classes from "./Avatar.module.css";

const Avatar: FC = ({ children }) => {
  return <div className={classes.Avatar}>{children}</div>;
};

export default Avatar;
