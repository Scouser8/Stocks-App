import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu, Notifications } from "@mui/icons-material";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {}}
          edge="start"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Stocks App
        </Typography>
        <Notifications />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
