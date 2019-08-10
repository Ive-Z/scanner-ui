import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './container.css';
import HorizontalLabelPositionBelowStepper from './Stepper';

const styles = theme => ({
	root: {
	  width: '100%',
	},
	backButton: {
	  margin: "100pt",
	  // marginRight: theme.spacing(1),
	},
	instructions: {
	  marginTop: theme.spacing(10),
	  marginBottom: theme.spacing(1),
	},
});



class LeftContainer extends React.Component {
	constructor(props) {
      super(props);

      this.state = { n:0 };

      // this.handleClick = this.handleClick.bind(this);
    }

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
