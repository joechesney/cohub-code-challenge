import React from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';


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

class Admin extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      labelWidth: 0,
    };

  }

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }



  render() {
    const { classes } = this.props;
    const { languages } = this.props;
    return (
      <form>

      </form>
    );
  }
}



export default withStyles(styles)(Admin);