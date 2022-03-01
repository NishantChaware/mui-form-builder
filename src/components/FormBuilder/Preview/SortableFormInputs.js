import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import flow from "lodash/flow";
import { DragSource, DropTarget } from "react-dnd";
import isEqual from "lodash/isEqual";
import HeaderBar from "../FormInputs/HeaderBar";
import switchItems from "../FormInputs/switchItems";
import { Grid } from "@mui/material";

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

    const opacity = isDragging ? 0 : 1;

    return (
      connectDragSource &&
      connectDropTarget && (
        <Grid
          item
          sx={{ mt: -1, p: 1 }}
          md={6}
          xs={12}
          ref={(instance) => {
            connectDragSource(findDOMNode(instance));
            connectDropTarget(findDOMNode(instance));
          }}
        >
          <div
            className=" "
            style={{ opacity }}
            onMouseOver={() => this.setState({ isHovering: true })}
            onMouseLeave={() => this.setState({ isHovering: false })}
          >
            <HeaderBar
              item={item}
              id={id}
              removeItem={removeItem}
              showEditor={showEditor}
              isHovering={this.state.isHovering}
            />
            {switchItems(item)}
          </div>
        </Grid>
      )
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
