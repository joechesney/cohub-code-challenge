
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
        // width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class YearsExperience extends React.Component {
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

YearsExperience.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(YearsExperience);

