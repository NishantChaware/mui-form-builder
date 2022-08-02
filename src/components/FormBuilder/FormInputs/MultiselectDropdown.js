import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import HeaderLabel from "./HeaderLabel";

const MultiselectDropdown = (props) => {
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
  const [value, setValue] = useState(defaultValue ? defaultValue : []);

  const _props = generator
    ? {
        ...input,
        disabled: readOnly,
        value: value,
        style: {
          borderColor: meta.touched && required && meta.error ? "red" : "",
        },
      }
    : {
        value: [],
      };

  useEffect(() => {
    if (input) {
      input.onChange(defaultValue);
    }
  }, [defaultValue]);
  const options = generator ? props.options : props.item.options;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {" "}
        {generator ? label : item.label}
      </InputLabel>

      <Select
        error={generator && showError(meta.touched, meta.error, meta.warning)}
        helperText={
          generator && showError(meta.touched, meta.error, meta.warning)
        }
        disabled={disabled}
        {..._props}
        multiple
        onChange={(e, values) => {
          setValue(e.target.value);
          input.onChange(e.target.value);
          console.log(e.target.value);
        }}
        label={generator ? label : item.label}
        labelId="demo-simple-select-label"
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                size="small"
                label={options.find(({ id }) => id === value).value}
              />
            ))}
          </Box>
        )}
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

MultiselectDropdown.defaultProps = {
  disabled: false,
  generator: false,
  className: "form-control",
};

export default MultiselectDropdown;
