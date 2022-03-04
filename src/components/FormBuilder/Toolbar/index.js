import { List, Typography } from "@mui/material";
import React from "react";
import ToolbarItem from "../ToolbarItem/ToolbarItem";

const Toolbar = ({ items }) => (
  <React.Fragment>
    <Typography align='left' variant="h6">Form Fields</Typography>
    <List>
      {items.map((item) => (
        <ToolbarItem data={item} key={item.key} />
      ))}
    </List>
  </React.Fragment>
);

export default Toolbar;
