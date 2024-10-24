import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { tss } from "tss-react/mui";

const useStyles = tss.create({
  layout: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    paddingTop: "100px",
    background: "linear-gradient(to left, #4A00E0, #8E2DE2)",
  },
});

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
  },
});

export default function AuthLayout() {
  const { classes } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}
