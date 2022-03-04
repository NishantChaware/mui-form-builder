import { Box, Chip } from "@mui/material";
import React, { Component } from "react";

class HeaderBar extends Component {
  render() {
    const { item, removeItem, id, showEditor, isHovering } = this.props;
    const opacity = isHovering ? 1 : 0;

    return (
      <Box
        sx={{
          opacity: opacity,
          // display: "flex",
          // justifyContent: "space-between",
        }}
      >
        {/* <Chip
          label={item.element}
          size="small"
          sx={{ mb: 1, float: "left", fontWeight: "600" }}
        /> */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 0.5,
            float: "right",
          }}
        >
          <div onClick={() => removeItem(id)} style={{ marginLeft: "1rem" }}>
            <i className="fa fa-trash-o" />
          </div>
          {item.element !== "LineBreak" && (
            <div
              style={{ marginLeft: "1rem" }}
              onClick={() => showEditor(item)}
            >
              <i className="fa fa-edit mr-3" />
            </div>
          )}
        </Box>
      </Box>
    );
  }
}

export default HeaderBar;
