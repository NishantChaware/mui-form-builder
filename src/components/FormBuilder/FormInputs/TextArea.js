import { TextField } from "@mui/material";
import React, { Component } from "react";
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

  const _props = generator
    ? {
        ...input,
        disabled: readOnly,
        value: defaultValue || input.value,
        onChange: (e) => input.onChange(e.target.value),
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
          label={item.label}
          required={generator ? required : item.required}
          multiline
        />
        {generator ? showError(meta.touched, meta.error, meta.warning) : ""}
      </React.Fragment>
    );
}



TextArea.defaultProps = {
  generator: false,
  className: "form-control",
};

export default TextArea;
