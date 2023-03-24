import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    background: "rgb(230, 230, 230)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "30rem",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "1rem",
    alignSelf: "center",
  },
  tabs: {
    display: "flex",
  },
  tab: {
    flex: 1,
  },
  form: {
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
  },
});

export default useStyles;
