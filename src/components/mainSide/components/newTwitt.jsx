import React, { useEffect, useRef, useState } from "react";
import { Button, Grid, IconButton, Input } from "@material-ui/core";
import useStyles from "./styles";
import ImageIcon from "@material-ui/icons/Image";
import axios from "axios";
import { NewTwittReq } from "../../../serveses";
import { toast } from "react-toastify";
import {
  useTwittState,
  SetTwitt as setTwitt,
  useTwittDispatch,
  UpdateHashTagsList,
} from "../../../context/twittContext";
const NewTwitt = ({ updateTweete }) => {
  const classes = useStyles();
  const inputFile = useRef();
  // const [twitt, setTwitt] = useState();
  const { twittText: twitt } = useTwittState();
  const twittDispatch = useTwittDispatch();
  const [imageFile, setImageFile] = useState();
  const [imagePath, setImagePath] = useState();
  const SendNewTwitt = () => {
    const currentTwitt = twitt;
    if (!currentTwitt) return;
    const data = {
      text: currentTwitt,
    };
    const formData = new FormData();
    formData.append("text", twitt);
    if (imageFile) formData.append("image", imageFile);
    NewTwittReq(formData, (isOk) => {
      if (!isOk) return toast.error(data);
      toast.success("پیام ارسال شد");
      updateTweete();
      setTwitt(twittDispatch, "");
      setImageFile();
      setImagePath();
      if (currentTwitt.includes("#")) UpdateHashTagsList(twittDispatch);
    });
  };
  const onChangeImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagePath(e.target.result);
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };
  const imageUser = () => {
    if (localStorage.getItem("image")) {
      return localStorage.getItem("image");
    } else {
      return "/img/person.png";
    }
  };
  const handleUploadImage = () => {
    inputFile.current.click();
  };
  return (
    <div className={classes.newtwitt}>
      <Grid container>
        <img alt="img" src={imageUser()} className={classes.newtwittImg} />{" "}
        <input
          placeholder="توییت کن..."
          value={twitt}
          onChange={(e) => setTwitt(twittDispatch, e.target.value)}
          className={classes.input}
        />
        <input
          type="file"
          style={{ display: "none" }}
          ref={inputFile}
          onChange={onChangeImage}
        />
      </Grid>
      {imagePath && (
        <div>
          <div
            style={{
              backgroundImage: `url(${imagePath})`,
            }}
            className={classes.imageTweeter}
          ></div>
        </div>
      )}

      <Grid
        container
        direction={"row-reverse"}
        style={{ marginTop: "2rem", alignItems: "center" }}
      >
        <Button
          variant={"contained"}
          color={"primary"}
          className={classes.button}
          onClick={SendNewTwitt}
        >
          توییت
        </Button>
        <IconButton
          style={{ borderRadius: "50%", margin: "0 1rem" }}
          onClick={handleUploadImage}
        >
          <ImageIcon className={classes.imgBtn} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default NewTwitt;
