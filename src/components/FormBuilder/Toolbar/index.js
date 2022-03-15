import { List, Typography, Box } from "@mui/material";
import React from "react";
import ToolbarItem from "../ToolbarItem/ToolbarItem";

const Toolbar = ({ items }) => (
  <Box
    sx={{ ml: 2, width: "100%", mt: 2 }}
    style={{ paddingTop: "70px !important" }}
  >
    <Typography align="left" variant="h6">
      Form Fields
    </Typography>
    <List>
      {items.map((item) => (
        <ToolbarItem data={item} key={item.key} />
      ))}
    </List>
  </Box>
);

export default Toolbar;
