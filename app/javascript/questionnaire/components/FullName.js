
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
});

class FullName extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

    }

    // handleChange = name => event => {
    //     this.setState({
    //         [name]: event.target.value,
    //     });
    // };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    // required
                    fullWidth
                    style={{ margin: 8 }}
                    id="standard-name"
                    label={this.props.label}
                    className={classes.textField}
                    value={this.props.fullName}
                    onChange={this.props.handleChange}
                    margin="normal"
                    variant="outlined"
                    name="fullName"
                />
            </form>
        );
    }
}


// withStyles is a method of the MaterialUI library that passes 
// 'styles' in as 'props' to 'FullName'. That's how the 
// component has access to that variable even though it looks
// like it shouldn't have access to it
export default withStyles(styles)(FullName);

