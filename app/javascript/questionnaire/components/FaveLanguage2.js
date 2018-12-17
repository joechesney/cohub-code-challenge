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

const FaveLanguage2 = props => (
    <form  autoComplete="off">
        
        <FormControl variant="outlined" >
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="faveLanguageInput"
          >
            Favorite Language
          </InputLabel>
          <Select
            value={props.faveLanguage}
            // onChange={this.handleChange}
            name="faveLanguage"

            input={
              <OutlinedInput
                labelWidth={0}
                name="faveLanguage"
                id="faveLanguageInput"
              />    
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {
                props.languages.map(lang => (
                    <MenuItem key={lang} value={lang} >{lang}</MenuItem>
                ))
            }
          </Select>
        </FormControl>

      </form>
)

export default FaveLanguage2;