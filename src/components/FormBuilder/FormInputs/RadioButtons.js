import React, { Component, useState, useEffect } from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const RadioButtons = (props) => {
  const {
    id,
    meta,
    type,
    item,
    label,
    input,
    required,
    readOnly,
    generator,
    showError,
    defaultValue,
  } = props;
  const [value, setValue] = useState(defaultValue);

  const options = generator ? props.options : props.item.options;

  const _props = generator
    ? {
        ...input,
        disabled: readOnly,
      }
    : {};

  useEffect(() => {
    if (input) {
      input.onChange(defaultValue);
    }
  }, [defaultValue]);


  return (
    <FormControl>
      <FormLabel id="buttons-group-label">
        {generator ? label : item.label}
      </FormLabel>
      <RadioGroup
        row
        {..._props}
        error={generator && showError(meta.touched, meta.error, meta.warning)}
        helperText={
          generator && showError(meta.touched, meta.error, meta.warning)
        }
        aria-labelledby="buttons-group-label"
        value={value}
        name="radio-buttons-group"
        onChange={(e) => {
          setValue(e.target.value);
          input.onChange(e.target.value);
        }}
      >
        {options.map(({ id, value }) => (
          <FormControlLabel value={id} control={<Radio />} label={value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
