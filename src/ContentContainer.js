import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer'
import './container.css';


const styles = theme => ({

});

class ContentContainer extends React.Component {
    state = {

    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>
                <div class='both_cont'>
                    <div class='left_cont'>
                        <LeftContainer/>
                    </div>
                    <div class='right_cont'>
                        <RightContainer/>
                    </div>
                </div>
				

            </React.Fragment>
);
}
}

ContentContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContentContainer);
