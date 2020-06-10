import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import { LetterAvatar } from "./LetterAvatar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  }
}));

const CalendarTaskPopper = (props) => {
  const classes = useStyles()
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
            aria-label="edit">
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
    </Card>
  );
}

export { CalendarTaskPopper }