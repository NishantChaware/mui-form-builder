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
        value: defaultValue || input.value,
        onChange: (val) => input.onChange(val),
        disabled: readOnly,
      }
    : {
        value: new Date(),
      };

  // const renderDate = (minDate = null, maxDate = null) => {
  //   switch(true) {
  //     case minDate !== null && maxDate !== null:
  //       return <DatePicker
  //                 {..._props}
  //                 maxDate={new Date(maxDate)}
  //                 minDate={new Date(minDate)}
  //               />

  //     case minDate !== null:
  //       return <DatePicker
  //                 {..._props}
  //                 minDate={new Date(formInput.minDate)}
  //               />

  //     case  maxDate !== null:
  //       return <DatePicker
  //                 {..._props}
  //                 maxDate={new Date(formInput.maxDate)}
  //               />

  //     default:
  //       return <DatePicker {..._props} />
  //   }
  // }
  const [value, setValue] = useState(null);

  return (
    <div>
      {/* <React.Fragment> */}
      {/* <HeaderLabel
          label={generator ? label : item.label}
          required={generator ? required : item.required}
          readOnly={readOnly}
        />
        {generator ? (
          renderDate(formInput.minDate, formInput.maxDate)
        ) : (
          <DatePicker {..._props} />
        )}
        <div>
          {generator ? showError(meta.touched, meta.error, meta.warning) : ""}
        </div>
      </React.Fragment> */}

      <DatePicker
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

DatePick.defaultProps = {
  generator: false,
  disabled: false,
};

export default DatePick;
