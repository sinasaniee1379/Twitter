import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    width: "25%",
    padding: "1.5rem 2rem",
  },
  profileTxt: {
    width: "max-content",
    marginLeft: ".5rem",
    direction: "ltr",
  },
  profImg: {
    width: "58px",
    height: "58px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "10px",
  },
  profileId: {
    flex: 1,
    color: theme.palette.text.hint,
    fontSize: "1rem",
  },
  profileName: {
    flex: 1,
  },
  twitterSection: {
    background: theme.color.gray.main,
    margin: "2.5rem 0",
    borderRadius: "2.5rem",
    padding: "11px 14px",
  },
  twitterTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "11px",
  },
  twitterParent: {
    padding: "10px 0",
  },
  twitterImg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "50%",
    marginRight: "10px",
  },
  twitterNameProf: {
    padding: "0 10px",
  },
  twitterName: {
    fontSize: "1.1rem",
    fontWeight: "600",
  },
  twitterId: {
    flex: 1,
    color: theme.palette.text.hint,
    fontSize: "1rem",
  },
}));

export default useStyles;
