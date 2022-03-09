import React, { Component, useState } from "react";
import HeaderLabel from "./HeaderLabel";
import map from "lodash/map";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

const Checkboxes = (props) => {
  // let initialValues = {};
  // props.item.options.map(({ id, checked }) => (initialValues[id] = checked));
  // const [state, setState] = useState(initialValues);

  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  
  const handleChange = (checked, input, id) => {
    let newValue = [...input.value];
    checked 
      ? newValue = [...newValue, id] 
      : newValue = newValue.filter(i => i !== id); 
    return input.onChange(newValue)
  }


  const {
    type,
    meta,
    item,
    label,
    input,
    disabled,
    required,
    readOnly,
    generator,
    showError,
    className,
    defaultValue,
  } = props;

  const _props = generator
    ? {
        type,
        disabled: readOnly,
      }
    : {
        disabled,
      };

  const isChecked = (id) => {
    return generator
      ? defaultValue.some((i) => i === id) ||
          (Array.isArray(input.value) && input.value.some((i) => i === id))
      : null;
  };

  const change = (checked, id) => {
    return generator ? handleChange(checked, input, id) : () => {};
  };

  const options = generator ? props.options : props.item.options;
  return (
    <React.Fragment>
      {/* <HeaderLabel 
      label={generator ? label : item.label} 
      required={generator ? required : item.required}
      readOnly={readOnly} 
    /> */}

      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">{generator ? label : item.label}</FormLabel>

        <FormGroup>
          {map(options, ({ id, value }) => (
            <Box key={id}>
              {" "}
              <FormControlLabel
                control={
                  <Checkbox
                    {..._props}
                    id={value}
                    name={id}
                    value={value}
                    readOnly={generator ? false : true}
                    checked={isChecked(id)}
                    onChange={e => change(e.target.checked, id)}

                  />
                }
                label={value}
              />
            </Box>
          ))}
        </FormGroup>
      </FormControl>

      {generator ? showError(meta.touched, meta.error, meta.warning) : ""}
    </React.Fragment>
  );
};

Checkboxes.defaultProps = {
  disabled: false,
  generator: false,
  className: "mr-2",
};

export default Checkboxes;
