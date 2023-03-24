import React, { useState, useEffect, useRef } from "react";
import {
  ButtonBase,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { getUser } from "./../../serveses/index";
import { UserUploadImg } from "../../serveses/auth";
import { toast } from "react-toastify";

const Twitter = ({ id, title, img }) => {
  const classes = useStyles();
  const imageUser = () => {
    if (img) {
      return img;
    } else {
      return "/img/person.png";
    }
  };
  return (
    <ButtonBase style={{ width: "100%" }}>
      <Grid container direction={"row"} className={classes.twitterParent}>
        <img alt="img" src={imageUser()} className={classes.twitterImg} />
        <Grid
          item
          container
          direction={"column"}
          className={classes.twitterNameProf}
          style={{ width: "max-content" }}
        >
          <Typography className={classes.twitterName}>{title}</Typography>
          <Typography className={classes.twitterId}>{id}</Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
};

const LeftSide = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [menu, setMenu] = useState();
  const [avatarImg, setAvatarImg] = useState();
  const [ImagePath, setImagePath] = useState();
  const inputRef = useRef();
  const handleMenu = (e) => {
    if (menu) setMenu(null);
    else setMenu(e.currentTarget);
  };

  const imageUser = () => {
    if (ImagePath) {
      return ImagePath;
    }
    if (localStorage.getItem("image")) {
      return localStorage.getItem("image");
    } else {
      return "/img/user-profiles.png";
    }
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setAvatarImg(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePath(e.target.result);
        console.log(ImagePath);
      };
      reader.readAsDataURL(e.target.files[0]);
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      UserUploadImg(formData, (isOk, data) => {
        if (!isOk) return toast.error(data);
        return toast.success("عکس با موفقیت تغییر کرد");
        localStorage.setItem("image", ImagePath);
      });
    }
  };
  useEffect(() => {
    getUser((isOk, data) => {
      if (!isOk) return alert("نا موفق تو گرفتن لیست یوزر");
      setUsers(data);
    });
  }, []);
  return (
    <div className={classes.root}>
      <Grid container direction={"row-reverse"} onClick={handleMenu}>
        <img src={imageUser()} className={classes.profImg} alt="img" />
        <Grid
          item
          container
          direction={"column"}
          className={classes.profileTxt}
        >
          <Typography className={classes.profileName}>
            {localStorage.getItem("name")}
          </Typography>
          <Typography className={classes.profileId}>
            {localStorage.getItem("username")}
          </Typography>
          <input
            ref={inputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleAvatarChange}
          />
        </Grid>

        <Grid
          item
          container
          direction={"column"}
          className={classes.twitterSection}
        >
          <Typography className={classes.twitterTitle}>
            بهترین خبر نگاران
          </Typography>
          <Divider style={{ margin: "0 -15px" }} />
          {users.map((item, index) => {
            return (
              <Link to="usertwitt">
                <Twitter
                  id={item.username}
                  img={item.image}
                  title={item.name}
                />
                {index !== users.length - 1 ? (
                  <Divider style={{ margin: "0 -15px" }} />
                ) : null}
              </Link>
            );
          })}
        </Grid>
      </Grid>
      <Menu open={Boolean(menu)} onClose={() => setMenu(null)} anchorEl={menu}>
        <MenuItem
          onClick={() => {
            inputRef.current.click();
          }}
        >
          ویرایش عکس پروفایل
        </MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          خروج
        </MenuItem>
      </Menu>
    </div>
  );
};

export default LeftSide;
