import React from 'react';
import ReactDOM from 'react-dom';
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
  constructor(props){
    super(props); 
    this.state = {
      labelWidth: 0,
    };
  }

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
            htmlFor="faveLanguageInput"
          >
            Favorite Language
          </InputLabel>
          <Select
            value={this.props.faveLanguage}
            onChange={this.props.handleChange}
            name="faveLanguage"
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="faveLanguage"
                id="faveLanguageInput"
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


export default withStyles(styles)(FaveLanguage);