import React, { useState, useEffect } from "react";
import Header from "../../components/header/hedear";
import { Divider } from "@material-ui/core";
import TwittList from "../../components/mainSide/components/TwittList";
import useStyles from "./styles";
import axios from "axios";
import { ApiTwitt } from "./../../serveses/index";

const TwittHash = (props) => {
  const [twitt, setTwitt] = useState([]);

  useEffect(() => {
    ApiTwitt((isOk, data) => {
      if (!isOk) return alert("نا موفق");
      setTwitt(data);
    });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header
        title={"کرونا ویروس"}
        icon={
          <img
            alt="img"
            src={"img/pngwing.com.png"}
            className={classes.hashimg}
          />
        }
      />
      <Divider className={classes.divider} />
      <TwittList data={twitt} />
    </div>
  );
};

export default TwittHash;
