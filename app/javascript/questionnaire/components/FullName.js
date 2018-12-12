
import React from 'react';
import PropTypes from 'prop-types';
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
    state = {
        name,
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
        label: this.props.label
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    fullWidth
                    style={{ margin: 8 }}
                    id="standard-name"
                    label={this.state.label}
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
            </form>
        );
    }
}

FullName.propTypes = {
    classes: PropTypes.object.isRequired,
};

// withStyles is a method of the MaterialUI library that passes 
// 'styles' in as 'props' to 'FullName'. That's how the 
// component has access to that variable even though it looks
// like it shouldn't have access to it
export default withStyles(styles)(FullName);

