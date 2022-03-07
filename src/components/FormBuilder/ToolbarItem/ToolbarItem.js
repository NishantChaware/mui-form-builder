import React from "react";
import classNames from "classnames";
import { DragSource } from "react-dnd";
import { connect } from "react-redux";
import { compose } from "redux";
import { addItem } from "../../../actions/formBuilderActions";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import * as Icons from "@mui/icons-material";

// type, spec and collect are the paramters to the DragSource HOC
const type = (props) => "items";

const spec = {
  beginDrag(props) {
    return {
      item: props.data.key,
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) return; // return if not dropped in the Preview component
    props.addItem(props.data.key);
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
});

const ToolbarItem = (props) => {
  const { isDragging, connectDragSource, data } = props;

  const opacity = isDragging ? 0.5 : 1;
  const backgroundColor = isDragging ? "lightgray" : "white";

  return connectDragSource(
    <div>
      <ListItem
        sx={{ cursor: "pointer", opacity }}
        onClick={() => props.addItem(props.data.key)}
      >
        <ListItemIcon sx={{ mr: -1 }}>
          {React.createElement(Icons[item.icon])}
        </ListItemIcon>
        <ListItemText primary={data.name} />
      </ListItem>
    </div>
  );
};

export default compose(
  connect(
    (state) => ({
      previewItems: state.formBuilder,
    }),
    {
      addItem,
    }
  ),
  DragSource(type, spec, collect)
)(ToolbarItem);
