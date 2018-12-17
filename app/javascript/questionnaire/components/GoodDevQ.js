import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class GoodDevQ extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Are you a good developer?</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="no"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="start"
            />
            <FormControlLabel
              value="yes"
              control={<Radio color="primary" />}
              label="Yes"
              labelPlacement="start"
            />

          </RadioGroup>
          <FormHelperText>labelPlacement start</FormHelperText>
        </FormControl>
      </form>
    );
  }
}


export default withStyles(styles)(GoodDevQ);