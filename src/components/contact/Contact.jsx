import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

import Edit from "@material-ui/icons/Edit";
import MyModal from "../ui/myModal/MyModal";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    marginRight: "10px",
    marginLeft: "10px",
    marginBottom: "20px",
  },
});

function Contact({ id, name, number, handleDeleteContact, handleEditContact }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://onldata.blob.core.windows.net/onlizerfiles/system_google_contacts_ico.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {number}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleEditContact(id)}
        >
          <Edit />
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDeleteContact(id)}
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default Contact;
