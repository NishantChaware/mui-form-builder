import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Component } from "react";
import HeaderLabel from "./HeaderLabel";

const Dropdown = (props) => {
  const {
    meta,
    item,
    label,
    input,
    disabled,
    required,
    readOnly,
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
        onChange: (e) => {
          input.onChange(e.target.value);
        },
        style: {
          borderColor: meta.touched && required && meta.error ? "red" : "",
        },
      }
    : {};


    console.log(input)
  const options = generator ? props.options : props.item.options;

  return (
    <FormControl fullWidth>
      <InputLabel id="dropdown-label">
        {generator ? label : item.label}
      </InputLabel>

      <Select
        disabled={disabled}
        {..._props}
        label={generator ? label : item.label}
        labelId="dropdown-label"
      >
        {options.map(({ id, value }) => (
          <MenuItem key={id} value={id}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

Dropdown.defaultProps = {
  disabled: false,
  generator: false,
  className: "form-control",
};

export default Dropdown;
