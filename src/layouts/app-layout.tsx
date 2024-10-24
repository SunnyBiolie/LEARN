import { AppBar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { tss } from "tss-react/mui";

const useStyles = tss.create(() => {
  return {
    root: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      height: "3000px",
    },
    appBar: {
      padding: "4px",
    },
  };
});

export default function AppLayout() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="success" className={classes.appBar}>
        a
      </AppBar>
      <Outlet />
    </div>
  );
}
