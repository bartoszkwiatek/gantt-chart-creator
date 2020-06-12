import { Checkbox, FormControl, FormControlLabel, FormGroup, ListSubheader, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';


const MainAndParentOptions = (props) => {
  const [hasParent, setHasParent] = useState(false);

  const handleParent = (event) => {
    setHasParent(event.target.checked);
    if (event.target.checked === false) {
      props.onChange({ 'parent': '' })
    }
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            name="mainTask"
            checked={props.data.mainTask}
            onChange={e => {
              if (e.target.checked) {
                props.onChange({ [e.target.name]: e.target.checked, 'parent': '' })
              } else {
                props.onChange({ [e.target.name]: e.target.checked })
              }
            }}
          />}
        label="Main task"
      />
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              name="parent"
              disabled={props.data.mainTask}
              checked={props.data.mainTask ? false : hasParent}
              onChange={handleParent}
            />
          }
          label="Has parent"
        />
        <Select
          value={props.data.parent}
          name="parent"
          onChange={e => {
            props.onChange({ [e.target.name]: e.target.value })
          }}
          disabled={props.data.mainTask || !hasParent}
          autoWidth
          displayEmpty

          id="grouped-select">
          <MenuItem value="" disabled>
            <em>Parent task</em>
          </MenuItem>

          {/* get from store */}
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1sdgfasdgasdgasg</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
          {/* ///// */}

        </Select>
      </FormControl>

    </FormGroup>
  )
}
export { MainAndParentOptions }