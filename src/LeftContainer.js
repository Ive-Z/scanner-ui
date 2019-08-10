import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HorizontalLabelPositionBelowStepper from './Stepper';

const styles = theme => ({

});

class LeftContainer extends React.Component {
    state = {

    };



    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>

                <HorizontalLabelPositionBelowStepper/>

            </React.Fragment>
);
}
}

LeftContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftContainer);
