import React, { useEffect, useState } from "react";
import { Divider } from "@material-ui/core";
import useStyles from "./styles";
import Header from "../header/hedear";
import NewTwitt from "./components/newTwitt";
import TwittList from "./components/TwittList";
import HomeIcon from "@material-ui/icons/Home";
import { ApiTwitt } from "./../../serveses/index";
import {
  useTwittState,
  useTwittDispatch,
  SetTwittList,
} from "./../../context/twittContext";
const MainSide = () => {
  const { twittlist: twitt } = useTwittState();
  const dispatch = useTwittDispatch();
  // const [twitt, setTwitt] = useState([]);

  useEffect(() => {
    updateTweete();
  }, []);

  const updateTweete = () => {
    ApiTwitt((isOk, data) => {
      if (!isOk) return alert("نا موفق");
      SetTwittList(dispatch, data);
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title={"خانه"} icon={<HomeIcon />} />
      <Divider className={classes.divider} />
      <NewTwitt updateTweete={updateTweete} />
      <TwittList data={twitt} />
    </div>
  );
};

export default MainSide;
