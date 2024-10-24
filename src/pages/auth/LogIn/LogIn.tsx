import { ElementRef, type MouseEvent, useRef, useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import { tss } from "tss-react/mui";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { LogInInputs } from "../../../types/auth";

interface Props {
  form: UseFormReturn<LogInInputs, undefined>;
  onSubmit: SubmitHandler<LogInInputs>;
}

const useStyles = tss.create({
  card: {
    maxWidth: "100%",
    width: "416px",
    padding: "24px",
    margin: "8px",
    borderRadius: "8px",
  },
});

export default function Login({ form, onSubmit }: Props) {
  const { classes } = useStyles();
  const theme = useTheme();

  const { register, handleSubmit } = form;

  const [isShowPassword, setIsShowPassword] = useState(false);
  const inputPwdRef = useRef<ElementRef<"input">>();

  const onToggleShowPassword = () => {
    const target = inputPwdRef.current;
    if (target) {
      const length = target.value.length;

      setIsShowPassword((prev) => !prev);

      setTimeout(() => {
        target.setSelectionRange(0, length);
      }, 0);
    }
  };
  const handleMouseDownPassword = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <Paper elevation={8} className={classes.card}>
      <Stack spacing={4}>
        <Typography
          variant="h6"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, color: "GrayText" }}
        >
          Welcome back
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4} sx={{ mb: theme.spacing(6) }}>
            <TextField
              label="Username"
              {...register("userName", { required: true })}
              variant="standard"
              // helperText={"Something went wrong"}
              error
            />
            <TextField
              inputRef={inputPwdRef}
              label="Password"
              {...register("passWord")}
              variant="standard"
              type={isShowPassword ? "text" : "password"}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={onToggleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="small"
                      >
                        {isShowPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            ></TextField>
          </Stack>
          <Button variant="contained" type="submit" fullWidth>
            Log in
          </Button>
        </form>
        <Typography variant="subtitle2" align="center">
          Aldready have an account? Log in
        </Typography>
      </Stack>
    </Paper>
  );
}
