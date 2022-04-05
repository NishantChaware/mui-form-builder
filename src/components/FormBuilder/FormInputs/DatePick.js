import React, { Component, useState } from "react";
import HeaderLabel from "./HeaderLabel";
// import DatePicker from "react-date-picker";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

const DatePick = (props) => {
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
    <div>
      <DatePicker
       error={generator && showError(meta.touched, meta.error, meta.warning)}
       helperText={
         generator && showError(meta.touched, meta.error, meta.warning)
       }
        {..._props}
        required={required}
        label={generator ? label : item.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          input.onChange(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            error={
              generator && showError(meta.touched, meta.error, meta.warning)
            }
          />
        )}
      />
      {generator ? showError(meta.touched, meta.error, meta.warning) : ""}
    </div>
  );
};

DatePick.defaultProps = {
  generator: false,
  disabled: false,
};

export default DatePick;
