import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";

export default function Auth() {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        
      >
        <Button variant="contained" color="error">
          Sign up
        </Button>

        <Button variant="outlined" color="error">
          login
        </Button>
      </Stack>
    </>
  );
}
