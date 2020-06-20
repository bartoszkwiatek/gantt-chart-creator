
import React from 'react'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';


const SelectWithAdd = (props) => {
  const filter = createFilterOptions();
  return (
    <Autocomplete
      value={props.value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          props.onChange({
            [props.name]: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          props.onChange({
            [props.name]: newValue.inputValue,
          });
        } else {
          props.onChange(newValue);
        }
      }}

      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue,
            [props.name]: `Add ${props.name}: ${params.inputValue}`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={props.id}
      options={props.options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option[props.name];
      }}
      renderOption={(option) => option[props.name]}

      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}

        />
      )}
    />
  );
}
export { SelectWithAdd }
