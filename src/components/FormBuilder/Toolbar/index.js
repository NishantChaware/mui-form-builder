import { List, Typography, Box, Drawer, Divider, Hidden } from "@mui/material";
import React from "react";
import ToolbarItem from "../ToolbarItem/ToolbarItem";

const Toolbar = ({ items }) => (
  <Drawer
    anchor="left"
    open
    PaperProps={{
      sx: {
        backgroundColor: "neutral.900",
        borderRightColor: "divider",
        borderRightStyle: "solid",
        borderRightWidth: (theme) => (theme.palette.mode === "dark" ? 1 : 0),
        color: "#FFFFFF",
        width: 280,
        overflow: "hidden",
      },
    }}
    variant="permanent"
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: "100%",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        {" "}
        <Typography align="left" variant="h6">
          Form Fields
        </Typography>
        <List>
          {items.map((item) => (
            <ToolbarItem data={item} key={item.key} />
          ))}
        </List>
      </Box>
      <Divider
        sx={{
          borderColor: "#2D3748", // dark divider
        }}
      />
    </Box>{" "}
  </Drawer>
);

export default Toolbar;
