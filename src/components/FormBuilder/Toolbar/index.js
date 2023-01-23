import {
  List,
  Typography,
  Box,
  Drawer,
  Divider,
  Hidden,
  Paper,
} from "@mui/material";
import React from "react";
import ToolbarItem from "../ToolbarItem/ToolbarItem";

const Toolbar = ({ items }) => (
  <Paper
    elevation={0}
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === "dark" ? "#111827" : "#FFFFFF",
      borderRightColor: "divider",
      borderRightStyle: "solid",
      borderRightWidth: (theme) => (theme.palette.mode === "dark" ? 1 : 0),
      color: "#FFFFFF",
      overflow: "hidden",
    }}
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
  </Paper>
);

export default Toolbar;
