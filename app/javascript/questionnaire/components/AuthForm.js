
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton.js';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 19,
    },
        menu: {
        width: 200,
    },
});

class Entry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
    
        };
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <div>
          <TextField
            required
            // fullWidth
            style={{ margin: 8 }}
            id="standard-username"
            label="username"
            className={classes.textField}
            value={this.props.username}
            onChange={this.props.onChange}
            margin="normal"
            variant="outlined"
            name="username"
          />
          </div>
          <div>
          <TextField
            required
            // fullWidth
            style={{ margin: 8 }}
            id="standard-password"
            label="password"
            className={classes.textField}
            value={this.props.password}
            onChange={this.props.onChange}
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
          />
          </div>
          <div>
          <SubmitButton
            onClick={this.props.onClick}
          />
          </div>
        </div>
      );
    }
}

// withStyles is a method of the MaterialUI library that passes 
// 'styles' in as 'props' to 'YearsExperience'. That's how the 
// component has access to that variable even though it looks
// like it shouldn't have access to it
export default withStyles(styles)(Entry);
