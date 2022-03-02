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

    console.log(item)

  return (
    <TextField
      {..._props}
      type={type}
      // className={className}
      fullWidth
      // label={generator ? label : item.label}
      label={item.label}
      required={generator ? required : item.required}
    />
    // <div>
    //   <HeaderLabel
    //     label={generator ? label : item.label}
    //     required={generator ? required : item.required}
    //     readOnly={readOnly}
    //   />
    //   <input
    //     {..._props}
    //     type={type}
    //     className={className}
    //   />
    //   {generator ? showError(meta.touched, meta.error, meta.warning) : ''}
    // </div>  )
  );
};

export default TextInput;
