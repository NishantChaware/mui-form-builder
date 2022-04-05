import { TextField } from "@mui/material";
import React, { Component, useState } from "react";
import HeaderLabel from "./HeaderLabel";

const TextArea = (props) => {
  const {
    meta,
    item,
    input,
    label,
    readOnly,
    required,
    className,
    generator,
    showError,
    defaultValue,
  } = props;

  const [value, setValue] = useState(defaultValue);

  const _props = generator
    ? {
        ...input,
        disabled: readOnly,
        value: value,
        style: {
          borderColor: meta.touched && required && meta.error ? "red" : "",
        },
      }
    : {};

  return (
    <React.Fragment>
      <TextField
        fullWidth
        {..._props}
        label={generator ? label : item.label}
        required={generator ? required : item.required}
        multiline
        onChange={(e) => setValue(e.target.value)}
        error={generator && showError(meta.touched, meta.error, meta.warning)}
      />
      {generator ? showError(meta.touched, meta.error, meta.warning) : ""}
    </React.Fragment>
  );
};

TextArea.defaultProps = {
  generator: false,
  className: "form-control",
};

export default TextArea;
