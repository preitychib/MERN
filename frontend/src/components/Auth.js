import { Box, Button, TextField, Typography } from "@mui/material";
import { bgcolor, color } from "@mui/system";
import React from "react";

const Auth = () => {
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ffdacc
"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography
            variant="h2"
            padding={3}
            textAlign="center"
            color={"#ff637e"}
          >
            Login
          </Typography>
          <TextField placeholder="Name" margin="normal" />
          <TextField type={"email"} placeholder="Email" margin="normal" />
          <TextField type={"password"} placeholder="Password" margin="normal" />
          <Button sx={{ borderRadius: 3, marginTop: 3, color: "#00a152" }}>
            Submit
          </Button>
          <Button sx={{ borderRadius: 3, marginTop: 1, color: "#ff4081" }}>
            Change to Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
