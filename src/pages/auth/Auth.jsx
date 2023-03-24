import React, { useState } from "react";
import { Button, Input, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import useStyles from "./style";
import { toast } from "react-toastify";
import { LoginApi, RegisterApi } from "./../../serveses/auth";
const LOGIN_TAB_VALUE = 1;
const REG_TAB_VALUE = 2;
const Auth = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(LOGIN_TAB_VALUE);

  // login
  const [userNameLogin, setUserName] = useState();
  const [passWordLogin, setPassword] = useState();

  // login
  const [userNameRegister, setUserNameRegister] = useState();
  const [passWordRegister, setPasswordRegister] = useState();
  const [fullNameRegister, setFullNameRegister] = useState();
  const [confPasswordRegister, setconfPasswordRegister] = useState();
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  const validateLogin = (user) => {
    if (!user.username) return "باید حتما یوزرنیم را وارد کنید";
    if (!user.password) return "باید حتما رمز عبور را وارد کنید";
  };

  const validateRegister = (user) => {
    if (!user.fullname) return "باید حتما اسم را وارد کنید";
    if (!user.username) return "باید حتما یوزرنیم را وارد کنید";
    if (!user.password) return "باید حتما پسوورد را وارد کنید";
    if (user.password !== user.confPasswordRegister)
      return "رمز ها باید یکسان باشند";
  };
  const handleRegister = () => {
    const user = {
      fullname: fullNameRegister,
      username: userNameRegister,
      password: passWordRegister,
      confPasswordRegister: confPasswordRegister,
    };

    const error = validateRegister(user);
    if (error) return toast.warn(error);
    user.confPasswordRegister = undefined;
    RegisterApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("شما با موفقیت ثبت نام شدید");
      localStorage.setItem("name", data.name);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
    });
  };
  const handleLogin = () => {
    const user = {
      username: userNameLogin,
      password: passWordLogin,
    };

    const error = validateLogin(user);
    if (error) return toast.warning(error);
    LoginApi(user, (isOk, data) => {
      if (!isOk) return toast.error(data);
      toast.success("شما با موفقیت وارد شدید");
      localStorage.setItem("name", data.name);
      localStorage.setItem("username", data.username);
      localStorage.setItem("x-auth-token", data["x-auth-token"]);
      window.location.reload();
    });
  };
  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Typography className={classes.header}>
          به توییتر ما خوش آمدید
        </Typography>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="ورود" value={LOGIN_TAB_VALUE} className={classes.tab} />
          <Tab label="ثبت نام" value={REG_TAB_VALUE} className={classes.tab} />
        </Tabs>
        {tab === LOGIN_TAB_VALUE && (
          <div className={classes.form}>
            <Typography>نام کاربری</Typography>
            <Input
              className={"uni_m_b_small"}
              value={userNameLogin}
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Typography>رمز عبور</Typography>
            <Input
              className={"uni_m_b_small"}
              value={passWordLogin}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              ورود
            </Button>
          </div>
        )}
        {tab === REG_TAB_VALUE && (
          <div className={classes.form}>
            <Typography>نام کامل</Typography>
            <Input
              className={"uni_m_b_small"}
              value={fullNameRegister}
              onChange={(e) => setFullNameRegister(e.target.value)}
            ></Input>
            <Typography>نام کاربری</Typography>
            <Input
              className={"uni_m_b_small"}
              value={userNameRegister}
              onChange={(e) => setUserNameRegister(e.target.value)}
            ></Input>
            <Typography>رمز عبور</Typography>
            <Input
              className={"uni_m_b_small"}
              value={passWordRegister}
              onChange={(e) => setPasswordRegister(e.target.value)}
            ></Input>
            <Typography>تکرار رمز عبور</Typography>
            <Input
              className={"uni_m_b_small"}
              value={confPasswordRegister}
              onChange={(e) => setconfPasswordRegister(e.target.value)}
            ></Input>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              ثبت نام
            </Button>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Auth;
