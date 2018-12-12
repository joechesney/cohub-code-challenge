import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FaveLanguage extends React.Component {
  state = {
    labelWidth: 0,
    faveLanguage: ''
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value});
      console.log(this.state);
    };

  render() {
    const { classes } = this.props;
    const { languages } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Favorite Language
          </InputLabel>
          <Select
            value={this.state.faveLanguage}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="faveLanguage"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
                languages.map(lang => (
                    <MenuItem key={lang} value={lang} >{lang}</MenuItem>
                ))
            }
          </Select>
        </FormControl>

      </form>
    );
  }
}

FaveLanguage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FaveLanguage);