import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { Component, useState } from "react";
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

  const _props = generator
    ? {
        ...input,
        disabled: readOnly,
        value: input.value || [],
        onChange: (e, values) => {
          const {
            target: { value },
          } = e;
          input.onChange(typeof value === "string" ? value.split(",") : value);
        },
        style: {
          borderColor: meta.touched && required && meta.error ? "red" : "",
        },
      }
    : {
        value: [],
      };

  const options = generator ? props.options : props.item.options;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">
        {" "}
        {generator ? label : item.label}
      </InputLabel>

      <Select
        disabled={disabled}
        {..._props}
        multiple
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
