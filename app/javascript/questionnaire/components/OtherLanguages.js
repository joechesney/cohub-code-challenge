import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class OtherLanguages extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        languages: this.props.languages,
        langBools:{}
    };
    this.props.languages.map( lang => (this.state.langBools[lang] = false));
  };

  handleChange = name => event => {
    const newLangBools = this.state.langBools;
    newLangBools[name] = event.target.checked;
    
    this.setState(prevState => {
      return {
        langBools: newLangBools,
        ...prevState
      }
    });

    console.log("current state in OtherLangugges", this.state)

    let arrayOfOtherFaveLanguages = this.state.languages.filter(lang => {
      if(this.state.langBools[lang] === true) return lang;
    });
    
    console.log("arrayOfOtherFaveLanguages: ", arrayOfOtherFaveLanguages)
    this.props.handleChange({target: {value: arrayOfOtherFaveLanguages, name: event.target.name}})
  };

  componentDidUpdate(){
    console.log("on update:", this.state)
    
  }

  render() {
    const { classes } = this.props;
    const { languages } = this.props;
    
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select two or three other favorite programming languages.</FormLabel>
          <FormGroup>
            {
              languages.map(lang => (
                <FormControlLabel
                  key={lang}
                  control={
                    <Checkbox name='otherFaveLanguages' checked={this.state.langBools[lang]} onChange={this.handleChange(lang)} value={lang} />
                  }
                  label={lang}
                />
              ))
            }

          </FormGroup>
        </FormControl>
        
      </div>
    );
  }
}


export default withStyles(styles)(OtherLanguages);