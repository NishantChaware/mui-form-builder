import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import { compose } from "redux";
import isEmpty from "lodash/isEmpty";
import {
  removeItem,
  dragItem,
  showEditor,
} from "../../../actions/formBuilderActions";
import FormInputs from "./SortableFormInputs";
import FinalFormPreview from "./FinalFormPreview";
import { Box, Button, Typography } from "@mui/material";

// DropTarget parameters
const type = () => "items";

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  hovered: monitor.isOver(),
  item: monitor.getItem(),
});

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFinalPreview: false,
    };
  }

  hideFinalPreview = () => {
    this.setState({ showFinalPreview: false });
  };

  render() {
    const {
      hovered,
      dragItem,
      onSubmit,
      removeItem,
      showEditor,
      previewItems,
      connectDropTarget,
    } = this.props;

    const border = hovered ? "1px solid green" : "1px solid #ccc";

    return connectDropTarget(
      <div style={{ height: "100%" }} className="mt-3">
        {this.state.showFinalPreview && (
          <FinalFormPreview
            data={previewItems}
            hideFinalPreview={this.hideFinalPreview}
          />
        )}
        <Box >
          <Box  sx={{display: 'flex', justifyContent: 'space-between'}}> 
            <Typography align="left" variant="h5">
              Edit Layout
            </Typography>

            <Box>
              {/* <Button
                className="btn btn-primary float-right ml-3"
                onClick={() => this.setState({ showFinalPreview: true })}
                disabled={isEmpty(previewItems)}
                variant="contained"
              >
                Preview{" "}
              </Button>
              <Button
                className="btn btn-dark float-right ml-3"
                onClick={() => onSubmit(JSON.stringify(previewItems))}
                disabled={isEmpty(previewItems)}
              >
                Export
              </Button> */}
            </Box>
          </Box>
          <div
            style={{
              minHeight: "80vh",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              alignContent: "flex-start",
              justifyContent: "space-between",
            }}
          >
            {isEmpty(previewItems) && (
              <h3 className="list-group-item bg-light text-center text-muted">
                Select / Drop an item from Toolbox
              </h3>
            )}

            {!isEmpty(previewItems) &&
              previewItems.map((item, i) => (
                <FormInputs
                  index={i}
                  item={item}
                  id={item.id}
                  key={item.id}
                  dragItem={dragItem}
                  removeItem={removeItem}
                  showEditor={showEditor}
                />
              ))}
          </div>
        </Box>
      </div>
    );
  }
}

export default compose(
  connect(
    (state) => ({
      previewItems: state.formBuilder.previewItems,
    }),
    {
      removeItem,
      dragItem,
      showEditor,
    }
  ),
  DropTarget(type, {}, collect)
)(Preview);
