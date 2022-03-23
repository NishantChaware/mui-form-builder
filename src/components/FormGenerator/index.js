import React from "react";
import PropTypes from "prop-types";
import ValidatedFormInputs from "./ValidatedFormInputs";
import { Container } from "@mui/material";

const Generator = ({
  onSubmit,
  readOnly,
  formData,
  responseData,
  submit,
  setSubmit,
}) => {
  return (
    <ValidatedFormInputs
      formData={formData}
      responseData={responseData}
      onSubmit={onSubmit}
      readOnly={readOnly}
      submit={submit}
      setSubmit={setSubmit}
    />
  );
};

Generator.propTypes = {
  formData: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseData: PropTypes.object,
  readOnly: PropTypes.bool,
};

Generator.defaultProps = {
  readOnly: false,
};

export default Generator;
