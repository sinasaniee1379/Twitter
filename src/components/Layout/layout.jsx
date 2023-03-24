import { CircularProgress, Divider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import RightSide from "../rightSide/RightSide";
import useStyles from "./styles";
import MainSide from "./../mainSide/MainSide";
import LeftSide from "./../leftSide/leftSide";
import TwittHash from "../../pages/twitByHashTag/twittHash";
import TwittByUser from "./../../pages/twittByUser/twittUser";
import { useHistory } from "react-router-dom";
import { getProfileReq } from "../../serveses/auth";
import { toast } from "react-toastify";

const LayOut = ({ children }) => {
  const [wait, setWait] = useState(true);
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getProfileReq((isOk, data) => {
      if (!isOk) {
        toast.error(data);
        localStorage.clear();
        history.push("/login");
      }
      setWait(false);
      localStorage.setItem("name", data.name);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
    });
  }, []);

  if (wait) {
    return (
      <div className={classes.waitPlease}>
        <CircularProgress />
        <span className={classes.waitText}>شکیبا باشید</span>
      </div>
    );
  } else
    return (
      <div className={classes.root}>
        <RightSide />
        <Divider orientation={"vertical"} className={classes.divider} />
        <div className={classes.content}>{children}</div>
        <Divider orientation={"vertical"} className={classes.divider} />
        <LeftSide />
      </div>
    );
};

export default LayOut;
