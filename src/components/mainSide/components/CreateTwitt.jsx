import React from "react";
import useStyles from "./styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CachedIcon from "@material-ui/icons/Cached";
import {
  useTwittDispatch,
  SetTwitt,
  LikeTwitt,
} from "../../../context/twittContext";
import { LikeTwittApi } from "../../../serveses/auth";
import { toast } from "react-toastify";

const CreateTwitt = ({ data }) => {
  const twittDispatch = useTwittDispatch();

  const classes = useStyles();
  const renderText = (text) => {
    return {
      __html: text.replace(
        /#\S+/g,
        "<a href='/tags/$&' style='color:#8ac6d1' >$&</a>"
      ),
    };
  };
  const getImage = () => {
    if (data.user.image) return data.user.image;
    return "/img/person.png";
  };

  const reTwittClick = () => {
    SetTwitt(twittDispatch, data.text);
  };

  const handleLike = () => {
    LikeTwittApi(data._id, (isOk, data) => {
      if (!isOk) {
        return toast.error(data);
      }
      LikeTwitt(twittDispatch, data._id);
    });
  };
  return (
    <div className={classes.defaultTwitt}>
      <Grid container>
        <Grid item container direction={"row"} alignItems="center">
          {/* {console.log(data)} */}
          <img alt="img" src={getImage()} className={classes.defaultImg} />
          <Typography className={classes.defaultTxt}>
            {data.user.name}
          </Typography>
          <Typography className={classes.defaultId}>{data.user.id}</Typography>
        </Grid>
        <Typography
          dangerouslySetInnerHTML={renderText(data.text)}
          className={classes.defaultTitle}
        />
        {data.image && (
          <div>
            <div
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              className={classes.imageTweeter}
            ></div>
          </div>
        )}
      </Grid>
      <Grid container direction={"row-reverse"} alignItems="center">
        <IconButton
          style={{ margin: "0 1rem" }}
          className={classes.defaultIcon}
          onClick={reTwittClick}
        >
          <CachedIcon />
        </IconButton>
        <IconButton
          style={{ color: "red", margin: "0 1rem" }}
          className={classes.defaultIcon}
          onClick={handleLike}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography className={classes.linkNum}>{data.likes}</Typography>
      </Grid>
    </div>
  );
};

export default CreateTwitt;
