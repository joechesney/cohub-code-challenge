import React from 'react';
import PropTypes from 'prop-types';
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
    // this.props.languages.map( lang => (this.setState({[lang]: false})));
    
    this.state = {
        languages: this.props.languages
    };
    this.props.languages.map( lang => (this.state[lang] = false));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
};

componentDidMount(){
}
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
                    <Checkbox checked={this.state[lang]} onChange={this.handleChange(lang)} value={lang} />
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

OtherLanguages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OtherLanguages);