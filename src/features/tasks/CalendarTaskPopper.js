import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardHeader, CardContent, CardActions, IconButton, Typography, Card } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { LetterAvatar } from "./LetterAvatar";
import { useState } from "react";
import { DraggableDialog } from "./DraggableDialog";
import { AddTaskDialog } from "./AddTaskDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  }
}));

const CalendarTaskPopper = (props) => {
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.data.title}
        subheader={props.data.category}
        action={
          <IconButton aria-label="settings">
            {props.data.completion}
          </IconButton>
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: 'space-between' }}>
        <LetterAvatar responsible={props.data.responsible} />
        <div>
          <IconButton
            aria-label="edit"
            onClick={handleOpenEdit}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(event) => props.click(event)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </CardActions>
      <DraggableDialog
        open={openEdit}
        title={'edit'}
        handleClose={handleCloseEdit}
      >
        <AddTaskDialog
          title={'edit'}
          data={props.data}
          handleClose={handleCloseEdit}
        />
      </DraggableDialog>
    </Card>
  );
}

export { CalendarTaskPopper }