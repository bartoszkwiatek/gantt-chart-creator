import { Checkbox, FormControl, FormControlLabel, FormGroup, ListSubheader, MenuItem, Select, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MainAndParentOptions = (props) => {
  const classes = useStyles()

  return (
    <FormGroup
    >
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
        <Select
          value={props.data.parent}
          name="parent"
          onChange={e => {
            props.onChange({ [e.target.name]: e.target.value })
          }}
          disabled={props.data.mainTask}
          autoWidth
          displayEmpty

          id="grouped-select">
          <MenuItem value="" disabled>
            Parent task
          </MenuItem>

          {/* get from store */}

          <MenuItem value={'asasdgasdggdasdgas'}>Category 1</MenuItem>
          <MenuItem className={classes.nested} value={1}>Option 1sdgfasdgasdgasg</MenuItem>
          <MenuItem className={classes.nested} value={2}>Option 2</MenuItem>
          <MenuItem value={'asdgas'}>Category 2</MenuItem>
          <MenuItem className={classes.nested} value={3}>Option 3</MenuItem>
          <MenuItem className={classes.nested} value={4}>Option 4</MenuItem>
          {/* ///// */}

        </Select>
      </FormControl>

    </FormGroup>
  )
}
export { MainAndParentOptions }