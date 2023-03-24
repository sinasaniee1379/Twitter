import React, { useEffect, useState } from "react";
import { ButtonBase, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { getHashTags } from "../../serveses/index";
import {
  useTwittState,
  SetHashTags,
  useTwittDispatch,
} from "./../../context/twittContext";

const RightSide = () => {
  const { hashTags } = useTwittState();
  const twittDispatch = useTwittDispatch();
  useEffect(() => {
    getHashTags((isOk, data) => {
      if (!isOk) return alert("نا موفق تو گرفتن لیست یوزر");
      SetHashTags(twittDispatch, data);
    });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to="/">
        <Grid container direction={"row"} alignItems={"center"}>
          <Grid item>
            <img
              src={"/icons/icons8-twitter-480.png"}
              className={classes.twitter}
              alt="/"
            />
          </Grid>
          <Grid item>
            <Typography className={classes.logoType}>توییتر فارسی</Typography>
          </Grid>
        </Grid>
      </Link>
      <Typography className={classes.hash}>داغ ترین هشتگ ها</Typography>
      <Grid container direction={"column"}>
        {hashTags.map((item) => (
          <Link to="/hashtags">
            <ButtonBase className={classes.hashTagParent}>
              <Grid item container alignItems={"center"}>
                <img
                  src={"/img/pngwing.com.png"}
                  className={classes.hashimg}
                  alt="img"
                />
                <Typography className={classes.hastag}>{item.text}</Typography>
              </Grid>
            </ButtonBase>
          </Link>
        ))}
      </Grid>
    </div>
  );
};

export default RightSide;
