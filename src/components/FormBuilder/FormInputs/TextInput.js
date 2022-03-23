import React, { Component } from "react";
import HeaderLabel from "./HeaderLabel";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  const {
    type,
    meta,
    label,
    item,
    input,
    readOnly,
    required,
    generator,
    className,
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

  // console.log(showError(meta?.touched, meta?.error, meta?.warning));

  return (
    <TextField
      {..._props}
      type={type}
      error={generator && showError(meta.touched, meta.error, meta.warning)}
      fullWidth
      helperText={
        generator && showError(meta.touched, meta.error, meta.warning)
      }
      label={generator ? label : item.label}
      required={generator ? required : item.required}
    />
  );
};

export default TextInput;
