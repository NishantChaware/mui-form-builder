import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import FormEditor from "./FormEditor";
import Toolbar from "./Toolbar";
import Preview from "./Preview";
import defaultItems from "./Toolbar/defaultItems";
import { Dialog, Grid, Paper, Box } from "@mui/material";
import {
  addItemsToPreview,
  hideEditor,
} from "../../actions/formBuilderActions";

const Builder = ({
  editorVisible,
  onSubmit,
  items,
  defaultFields,
  defaultPreviewItems,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (defaultPreviewItems) {
      let keyadded = defaultPreviewItems.map((x) => {
        return { ...x, key: x.id };
      });

      const unique = (arr, key) => {
        const keys = new Set();
        return arr.filter((el) => !keys.has(el[key]) && keys.add(el[key]));
      };

      console.log();
      dispatch(addItemsToPreview(unique(keyadded, "id")));
    }
  }, [defaultPreviewItems]);

  return (
    <React.Fragment>
      <Dialog open={editorVisible} onClose={hideEditor}>
        <FormEditor />
      </Dialog>
      <Grid container sx={{ p: 3, pl: 0, pt: 0 }}>
        <Grid item md={2.5} xs={12}>
          <Toolbar items={items} />
        </Grid>
        <Grid item md={9.5} xs={12} sx={{ pt: 3, pl: 3, width: "100%" }}>
          <Preview
            onSubmit={onSubmit}
            defaultFields={defaultFields}
            defaultPreviewItems={defaultPreviewItems}
          />
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
