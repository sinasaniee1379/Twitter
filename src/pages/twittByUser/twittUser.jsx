import React, { useEffect, useState } from "react";
import Header from "../../components/header/hedear";
import { Divider } from "@material-ui/core";
import TwittList from "../../components/mainSide/components/TwittList";
import useStyles from "./styles";
import { ApiTwitt } from "../../serveses/index";

const TwittByUser = () => {
  const [twitt, setTwitt] = useState([]);

  useEffect(() => {
    ApiTwitt((isOk, data) => {
      if (!isOk) return alert(data.message);
      else setTwitt(data);
    });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header
        title={"Xiaomi"}
        icon={<img src={"img/xiaomi-33319.png"} className={classes.hashimg} />}
      />
      <Divider className={classes.divider} />
      <TwittList data={twitt} />
    </div>
  );
};

export default TwittByUser;
