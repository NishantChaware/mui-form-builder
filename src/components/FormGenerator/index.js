import React from "react";
import PropTypes from "prop-types";
import ValidatedFormInputs from "./ValidatedFormInputs";
import { Container } from "@mui/material";

const Generator = ({ onSubmit, readOnly, formData, responseData }) => {
  return (
    <Container sx={{ px: 3, py: 1 }} maxWidth="lg">
      <ValidatedFormInputs
        formData={formData}
        responseData={responseData}
        onSubmit={onSubmit}
        readOnly={readOnly}
      />
    </Container>
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
