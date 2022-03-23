import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { Button } from "@mui/material";
import store from "../../store";

const RemoteSubmitButton = ({
  dispatch,
  submitOtherForm,
  values,
  submitSucceeded,
  title,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      onClick={async () => {
        await dispatch(submit("form"));
        submitOtherForm(store.getState().form);
      }}
      {...props}
    >
      {title}
    </Button>
  );
};

RemoteSubmitButton.defaultProps = {
  title: "submit",
};

export default connect((state) => ({
  submitSucceeded: state.form,
}))(RemoteSubmitButton);
