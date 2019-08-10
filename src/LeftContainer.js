import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './container.css';
import HorizontalLabelPositionBelowStepper from './Stepper';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import DiscreteSlider from './Slider.js';
import './stepper.css';

import TextMobileStepper from './ImageBroswer'
import {OBJModel} from 'react-3d-viewer'

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

function getSteps() {
  return ['Initialization', 'Processing...', 'Done!'];
}


class LeftContainer extends React.Component {
	constructor(props) {
      super(props);

      this.state = { n:10 };
	  console.log("constructing left container");
	  console.log(this.props.activeStep);
      // this.handleClick = this.handleClick.bind(this);
    }

	handleAdd=()=> {
	if(this.state.n<26){
	  this.setState({n:this.state.n+1});
	  console.log(this.state.n);
  }
	}

	handleMinus=()=>{
	  if(this.state.n>6){
		  this.setState({n:this.state.n-1});
		  console.log(this.state.n);
	  }
	}

	onChange=(event, value)=>{
		this.setState({n:value});
	}

    render() {
		const { classes } = this.props;
        const { activeStep } = this.state;

        return (
            <React.Fragment>


				<HorizontalLabelPositionBelowStepper
					images={this.props.images}
					activeStep={this.props.activeStep}
					n={this.state.n}
					handleAdd={this.handleAdd}
					handleMinus={this.handleMinus}
					handleNext={this.props.handleNext}
					handleTakePhotos={this.props.handleTakePhotos}
					onStart={this.props.onStart}
					onChange={this.onChange}
				/>


            </React.Fragment>
);
}
}

LeftContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftContainer);
