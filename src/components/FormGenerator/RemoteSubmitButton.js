import React from "react";
import { connect, useSelector } from "react-redux";
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
  const fields = useSelector((state) => {
    if (state.form && state.form.form && state.form.form.registeredFields)
      return state.form.form.registeredFields;
    else {
      return null;
    }
  });
  console.log();
  return (
    <Button
      variant="contained"
      onClick={async () => {
        dispatch({
          type: "@@redux-form/TOUCH",
          meta: {
            form: "form",
            fields: Object.keys(fields),
          },
        });
        await dispatch(submit("form"));
        await submitOtherForm(store.getState().form);
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
