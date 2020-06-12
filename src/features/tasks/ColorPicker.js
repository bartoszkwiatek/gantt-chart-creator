import { colors } from "./colors"

import React, { useState } from 'react';
import { TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, FormGroup, FormLabel, FormControl, FormControlLabel, FormHelperText, Switch, Checkbox, makeStyles, Button, Select, MenuItem, InputLabel, ListSubheader, ListItemText, ListItemIcon } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';


const ColorPicker = (props) => {

  return (
    <FormControl>
      <Select
        name="color"
        value={props.data.color}
        onChange={props.onChange}
        autoWidth
        displayEmpty

        id="color-select">
        <MenuItem value="" disabled>
          <em>Color</em>
        </MenuItem>
        {Object.entries(colors).map((color) => {
          const colorName = color[0];
          const colorValue = color[1];

          return (
            <MenuItem
              key={colorName}
              value={colorValue}>
              <ListItemIcon>
                <StopIcon
                  fontSize="large"
                  style={{ color: colorValue }}
                />
              </ListItemIcon>
              <ListItemText>
                {colorName}
              </ListItemText>
            </MenuItem>
          )
        })}

      </Select>
    </FormControl>
  )

}

export { ColorPicker }