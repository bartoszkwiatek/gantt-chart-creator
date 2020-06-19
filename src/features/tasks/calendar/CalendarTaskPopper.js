import { Card, CardActions, CardContent, CardHeader, Container, IconButton, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from "react";
import { AddTaskDialog } from "../dialogs/AddTaskDialog";
import { DeleteDialog } from "../dialogs/DeleteDialog";
import { DraggableDialog } from "../dialogs/DraggableDialog";
import { LetterAvatar } from "./LetterAvatar";
import { SidebarTasksNestedList } from "./SidebarTasksNestedList";
import { TaskCompletionIndicator } from "./TaskCompletionIndicator";

const useStyles = makeStyles((theme) => ({
  root: {
    wordBreak: "break-all"
  }
}));

const CalendarTaskPopper = (props) => {
  const classes = useStyles()
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleOpenEdit = () => {
    setOpenEdit(true)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
  }

  const handleOpenDelete = () => {
    setOpenDelete(true)
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  return (
    <Container
      disableGutters
      maxWidth="xs">

      <Card className={classes.root}>
        <CardHeader
          title={props.data.title}
          subheader={props.data.category}
          action={!props.data.mainTask ?
            <TaskCompletionIndicator
              data={props.data}
            />
            : ''
          }
        />
        <CardContent>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p">
            {props.data.description}
          </Typography>

        </CardContent>
        {props.data.mainTask && (
          <SidebarTasksNestedList
            data={props.data}
            startOpen={false}
            title="Subtasks list"
          />)
        }
        <CardActions style={{ justifyContent: 'space-between' }}>
          <LetterAvatar responsible={props.data.responsible} />
          <div>
            <Tooltip title={'Delete'}>
              <IconButton
                aria-label="delete"
                onClick={handleOpenDelete}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Edit'}>
              <IconButton
                aria-label="edit"
                onClick={handleOpenEdit}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={'Close'}>
              <IconButton
                onClick={(event) => props.click(event)}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
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
        <DraggableDialog
          open={openDelete}
          title={'delete'}
          handleClose={handleCloseDelete}
        >
          <DeleteDialog
            title={'delete'}
            task={props.data}
            handleClose={handleCloseDelete}

          />
        </DraggableDialog>
      </Card>
    </Container>
  );
}

export { CalendarTaskPopper };
