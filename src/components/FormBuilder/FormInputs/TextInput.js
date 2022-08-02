import React, { Component, useEffect, useState } from "react";
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

  // console.log(showError(meta?.touched, meta?.error, meta?.warning));
  useEffect(() => {
    if (input) {
      input.onChange(defaultValue);
    }
  }, [defaultValue]);
  return (
    <TextField
      {..._props}
      type={type}
      error={generator && showError(meta.touched, meta.error, meta.warning)}
      fullWidth
      helperText={
        generator && showError(meta.touched, meta.error, meta.warning)
      }
      onChange={(e) => {
        setValue(e.target.value);
        input.onChange(e.target.value);
      }}
      label={generator ? label : item.label}
      required={generator ? required : item.required}
    />
  );
};

export default TextInput;
