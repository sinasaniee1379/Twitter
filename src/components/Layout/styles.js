import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  divider: {
    height: "100%",
    background: "#7ebaff",
  },
  content: {
    flex: 1,
    overflowY: "auto",
  },
  waitPlease: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  waitText: {
    margin: "1em 0",
  },
});

export default useStyles;
