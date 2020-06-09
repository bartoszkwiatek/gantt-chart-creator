import React from 'react'
import styled from 'styled-components'
import { IconButton, makeStyles } from "@material-ui/core"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollPosition, selectScrollPosition } from './tasksSlice';


const CustomButton = styled.div`
height: 100vh;
width: 12vw;
position: inherit;
top: 0;
display: flex;
justify-content: center;
align-items: center;
opacity: 0.2;
transition: all 0.5s ease;
&:hover{
  opacity: 1;
}`

const ButtonLeft = styled(CustomButton)`
top: 0;
left: 0;
right: 0;
background-image: linear-gradient(to left, rgba(0,0,0,0) , rgba(0,0,0,0.7));
`
const ButtonRight = styled(CustomButton)`
top: 0;
right: 0;
background-image: linear-gradient(to right, rgba(0,0,0,0) , rgba(0,0,0,0.7));

`
const useStyles = makeStyles((theme) => ({
  root: {
    width: '5vw',
    height: '5vw',
  },
}));

const ScrollButtonRight = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const scroll = useSelector(selectScrollPosition)

  return (
    <ButtonRight>
      <IconButton
        className={classes.root}
        styles={{
          width: '100%'
        }}
        onClick={() => dispatch(setScrollPosition(scroll + 250))}
        aria-label="next"
      >
        <NavigateNextIcon fontSize="large" />
      </IconButton>
    </ButtonRight>
  )

};

const ScrollButtonLeft = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const scroll = useSelector(selectScrollPosition)

  return (
    <ButtonLeft>
      <IconButton
        className={classes.root}
        styles={{
          width: '100%'
        }}
        onClick={() => dispatch(setScrollPosition(scroll - 250))}
        aria-label="previous"
      >
        <NavigateBeforeIcon fontSize="large" />
      </IconButton>
    </ButtonLeft>
  )

}
export { ScrollButtonLeft, ScrollButtonRight }