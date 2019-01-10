import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {

  render() {
    const { classes, onClose, selectedValue, ...other  } = this.props;

    return (
      <Dialog onClose={this.props.onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Submission Successful</DialogTitle>
        <Button onClick={this.props.onClose} color="primary" autoFocus>
            Okay
        </Button>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SuccessfulSubmission extends React.Component {
  state = {
    open: true,
    selectedValue: emails[1],
  };

  render() {
    return (
      <div>
        <br />
        <SimpleDialogWrapped
          open={this.props.submitted}
          onClose={this.props.onClose}
        />
        <br />
      </div>
    );
  }
}

export default SuccessfulSubmission;