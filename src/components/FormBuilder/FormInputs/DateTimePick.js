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
        value: defaultValue || input.value,
        onChange: (val) => input.onChange(val),
        disabled: readOnly,
      }
    : {
        value: new Date(),
      };

  const [value, setValue] = useState(null);

  return (
    <div>
      <DateTimePicker
        label={item.label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

DateTimePick.defaultProps = {
  generator: false,
  disabled: false,
};

export default DateTimePick;
