import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Component, useEffect, useState } from "react";

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

  useEffect(() => {
    if (input) {
      input.onChange(defaultValue);
    }
  }, [defaultValue]);

  const options = generator ? props.options : props.item.options;

  return (
    <FormControl fullWidth key={defaultValue}>
      <InputLabel id="dropdown-label">
        {generator ? label : item.label}
      </InputLabel>

      <Select
        error={generator && showError(meta.touched, meta.error, meta.warning) }
        helperText={
          generator && showError(meta.touched, meta.error, meta.warning)
        }
        value={value}
        disabled={disabled}
        {..._props}
        label={generator ? label : item.label}
        labelId="dropdown-label"
        onChange={(e) => {
          setValue(e.target.value);
          input.onChange(e.target.value);
        }}
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
