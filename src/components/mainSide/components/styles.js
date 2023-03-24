import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 18,
    background: "white",
    display: "flex",
  },
  headerTitle: {
    marginRight: ".5rem",
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  newtwitt: {
    padding: 18,
    background: "white",
    display: "flex",
    flexDirection: "column",
  },
  newtwittImg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "10px",
  },

  button: {
    color: "#fff",
    borderRadius: "1rem",
    lineHeight: "1rem",
    width: "7rem",
    fontFamily: "Shabnam",
    height: "30px",
    minHeight: "30px",
  },
  imgBtn: {
    borderRadius: "50%",
    color: "red",
  },
  defaultTwitt: {
    marginTop: ".5rem",
    background: "#ffff",
    padding: "1rem",
  },
  defaultImg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "10px",
  },
  defaultTxt: {
    margin: "0 1rem",
  },
  defaultId: {
    fontSize: ".8rem",
    color: theme.palette.text.hint,
  },
  defaultTitle: {
    width: "70%",
    margin: "1rem 8rem ",
  },
  defaultIcon: {
    border: "1px solid #000",
    borderRadius: "50%",
    padding: ".3rem",
  },

  linkNum: {
    color: theme.palette.text.hint,
  },
  input: {
    outline: "none",
    width: "85%",
    border: "none",
    padding: "0 1em",
  },
  imageTweeter: {
    width: "10em",
    height: "10em",
    marginTop: "1em",
    backgroundPosition: "center",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

export default useStyles;
