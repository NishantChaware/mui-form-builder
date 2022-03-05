import { Box, Chip, IconButton } from "@mui/material";
import React, { Component, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const CustomHeaderBar = (props) => {
  const { item, removeItem, id, showEditor, isHovering } = props;
  const opacity = isHovering ? 1 : 0;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <Box>
      <IconButton
        sx={{ p: 0, m: 0, float: "right" }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      {/* <Chip
            label={item.element}
            size="small"
            sx={{ mb: 1, float: "left", fontWeight: "600" }}
          /> */}

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {item.element !== "LineBreak" && (
          <MenuItem disableRipple>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => {
                handleClose();
                showEditor(item);
              }}
            >
              <EditIcon fontSize="small" sx={{ mr: 1 }} />
              Edit
            </Box>
          </MenuItem>
        )}
        <MenuItem disableRipple>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            onClick={() => {
              removeItem(id);

              handleClose();
            }}
          >
            <DeleteIcon color="error" fontSize="small" sx={{ mr: 1 }} />
            Delete
          </Box>
        </MenuItem>
      </Menu>

    
    </Box>
  );
};

export default CustomHeaderBar;
