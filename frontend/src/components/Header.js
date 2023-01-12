import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { bgcolor, Box } from "@mui/system";

const Header = () => {
  return (
    <AppBar
      sx={{
        background:
          "radial-gradient(circle, rgba(255,195,160,1) 0%, rgba(255,175,189,1) 70%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blogs App</Typography>
        <Box display="flex" marginLeft="auto">
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="secondary"
          >
            Login
          </Button>
          <Button
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="secondary"
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
