import { Checkbox, FormControl, FormControlLabel, FormGroup, ListSubheader, MenuItem, Select, makeStyles } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTasks } from './tasksSlice';

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
  const data = useSelector(selectTasks)
  console.log(data)

  const list = [];

  data.forEach((mainTask) => {
    list.push({ value: mainTask.id, title: mainTask.title, nested: false })
    mainTask.tasks.forEach((task) => {
      list.push({ value: task.id, title: task.title, nested: true })
    })
  })


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
          {
            list.map((task, index) => {
              return (
                <MenuItem
                  key={index}
                  className={task.nested ? classes.nested : ''}
                  value={task.value}>{task.title}</MenuItem>
              )
            })
          }

        </Select>
      </FormControl>

    </FormGroup>
  )
}
export { MainAndParentOptions }