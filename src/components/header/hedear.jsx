import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Header = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <Link className={classes.header}>
      {icon}
      <Typography className={classes.headerTitle}>{title}</Typography>
    </Link>
  );
};

export default Header;
