import { useState } from "react";
import { Conteiner } from "./style.js";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const PasswordInput = ({ register, name, modificador, ...rest }) => {
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Conteiner>
      <OutlinedInput
        id={
          modificador === "password"
            ? "outlined-adornment-password"
            : "outlined-adornment-password2"
        }
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        {...rest}
        sx={{
          backgroundColor: "var(--Grey-1)",
          color: "var(--Color-text)",
          border: "none",
          width: "100%",

          "&.Mui-focused": {
            border: "1px solid var(--Color-text)",
          },
          "&.Mui-placeholder": {
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "16px",
            color: "var(--Color-text)",
          },
          height: "48px",
        }}
        inputProps={{ ...register(name) }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </Conteiner>
  );
};
