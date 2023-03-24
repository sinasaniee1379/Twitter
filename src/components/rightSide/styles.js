import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    width: "18%",
    textAlign: "center",
    padding: "1.5rem 1rem",
  },
  logoType: {
    fontSize: "1.3rem",
    fontWeight: "600",
    padding: "1.5rem 1rem",
    color: theme.palette.primary.main,
  },
  twitter: {
    width: "50px",
    height: "52px",
  },
  hash: {
    textAlign: "right",
    fontSize: "1.1rem",
    fontWeight: "600",
    padding: "1.5rem 1rem",
    margin: "1.5rem 0",
  },
  hashimg: {
    width: "30",
    height: "32px",
  },
  hastag: {
    marginRight: ".8rem",
  },
  hashTagParent: {
    width: "100%",
    marginBottom: ".5rem",
    padding: "0.15rem ",
  },
}));

export default useStyles;
