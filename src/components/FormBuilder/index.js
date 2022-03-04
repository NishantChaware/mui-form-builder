import React from "react";
import PropTypes from "prop-types";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { compose } from "redux";
import { connect } from "react-redux";
import FormEditor from "./FormEditor";
import Toolbar from "./Toolbar";
import Preview from "./Preview";
import defaultItems from "./Toolbar/defaultItems";
import { Dialog, Grid } from "@mui/material";
import { hideEditor } from "../../actions/formBuilderActions";

const Builder = ({ editorVisible, onSubmit, items }) => {
  return (
    <React.Fragment>
      <Dialog
        open={editorVisible}
        onClose={hideEditor}
      >
        <FormEditor />
      </Dialog>
      <Grid container sx={{ p: 3 }}>
        <Grid item md={3} xs={12}>
          <Toolbar items={items} />
        </Grid>
        <Grid item md={8} xs={12}>
          <Preview onSubmit={onSubmit} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Builder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.array,
};

Builder.defaultProps = {
  items: defaultItems(),
};

export default compose(
  connect(
    (state) => ({
      editorVisible: state.formBuilder.editorVisible,
    }),
    null
  ),
  DragDropContext(HTML5Backend)
)(Builder);
