import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import VerticalLinearStepper from './VerticalStepper';

const styles = theme => ({

});

class RightContainer extends React.Component {
	constructor(props) {
      super(props);
    }

    render() {

        return (
            <React.Fragment>
                <VerticalLinearStepper explanationStep={this.props.explanationStep}/>
            </React.Fragment>
);
}
}

RightContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightContainer);
