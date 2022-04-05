import React, { Component, useState } from "react";
import HeaderLabel from "./HeaderLabel";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { TextField } from "@mui/material";

const DateTimePick = (props) => {
  const {
    meta,
    item,
    input,
    label,
    required,
    readOnly,
    formInput,
    generator,
    showError,
    defaultValue,
  } = props;

  const _props = generator
    ? {
        disabled: readOnly,
      }
    : {
        value: new Date(),
      };

  const [value, setValue] = useState(defaultValue);

  return (
    <DateTimePicker
      {..._props}
      label={generator ? label : item.label}
      value={value}
      required={required}
      onChange={(newValue) => {
        setValue(newValue);
        input.onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          error={generator && showError(meta.touched, meta.error, meta.warning)}
        />
      )}
    />
  );
};

DateTimePick.defaultProps = {
  generator: false,
  disabled: false,
};

export default DateTimePick;
