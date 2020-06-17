import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { IconButton, TextField, InputAdornment } from "@material-ui/core"
import { setCompletion } from "../tasksSlice"

const TaskCompletionIndicator = (props) => {
  const dispatch = useDispatch()
  const [value, setValue] = useState(props.data.completion.slice(0, -1))
  const [edit, setEdit] = useState(false)

  const startEditing = () => {
    setEdit(true)
  }

  const endEditing = () => {
    setEdit(false)
    const completionValue = roundedValue(value) + '%'
    dispatch(setCompletion({ data: props.data, completion: completionValue }))
    console.log(completionValue)
  }

  const roundedValue = (inputValue) => {
    const val = Math.round(Number(inputValue))
    if (val > 100) {
      return 100
    } else if (val < 0) {
      return 0
    } else {
      return val
    }
  }

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <React.Fragment>
      {edit
        ? (<IconButton
          disableRipple
        >

          <TextField
            autoFocus
            onChange={handleChange}
            onBlur={endEditing}
            value={value}
            inputProps={{
              type: "number",
              max: 100,
              min: 0
            }}
            margin="none"
            id="standard-end-adornment"
            className="completion"
            style={{
              width: '3rem',
            }}
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </IconButton>)
        : (<IconButton
          aria-label="completion"
          onClick={startEditing}
        >
          {props.data.completion}
        </IconButton>)
      }
    </React.Fragment>
  )
}

export { TaskCompletionIndicator }




