import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import flow from "lodash/flow";
import { DragSource, DropTarget } from "react-dnd";
import isEqual from "lodash/isEqual";
import HeaderBar from "../FormInputs/HeaderBar";
import switchItems from "../FormInputs/switchItems";
import { Box, Grid } from "@mui/material";
import CustomHeaderBar from "../FormInputs/CustomHeaderBar";
import DragHandleIcon from "@mui/icons-material/DragHandle";
const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (isEqual(dragIndex, hoverIndex)) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.dragItem(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

class FormInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  render() {
    const {
      id,
      item,
      removeItem,
      showEditor,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    const display = isDragging ? "none" : "block";

    return (
      <Grid item md={6} xs={12}>
        <Box
          ref={(instance) => {
            connectDropTarget(findDOMNode(instance));
          }}
        >
          {isDragging && (
            <Box
              sx={{
                height: "100%",
                backgroundColor: "divider",
                borderColor: "primary.light",
                border: "1px dashed",
                height: "56px",
                marginTop: "24px",
              }}
            >
              {" "}
            </Box>
          )}
          <div
            className=""
            style={{ display }}
            onMouseOver={() => this.setState({ isHovering: true })}
            onMouseLeave={() => this.setState({ isHovering: false })}
          >
            <Box
              ref={(instance) => {
                connectDragSource(findDOMNode(instance));
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Box
                ref={(instance) => {
                  connectDragSource(findDOMNode(instance));
                }}
              >
                <DragHandleIcon
                  sx={{
                    mr: 1,
                    "&:hover": { cursor: "grab" },
                  }}
                />
              </Box>

              <CustomHeaderBar
                item={item}
                id={id}
                removeItem={removeItem}
                showEditor={showEditor}
                isHovering={this.state.isHovering}
              />
            </Box>

            {switchItems(item)}
          </div>
        </Box>
      </Grid>
    );
  }
}

export default flow(
  DragSource("item", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  })),
  DropTarget("item", cardTarget, (connect) => ({
    connectDropTarget: connect.dropTarget(),
  }))
)(FormInputs);
