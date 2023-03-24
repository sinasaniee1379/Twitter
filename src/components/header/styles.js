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
}));

export default useStyles;
