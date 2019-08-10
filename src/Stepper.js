import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import TextMobileStepper from './ImageBroswer'

import {OBJModel} from 'react-3d-viewer'

const useStyles = makeStyles(theme => ({
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
}));

function getSteps() {
  return ['Initialization', 'Processing...', 'Done!'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Initialization';
    case 1:
      return 'Processing...';
    case 2:
      return 'Done!';
    default:
      return 'Uknown stepIndex';
  }
}

// function getStepDiv(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return
// 	  <Button size="small" className={classes.margin}>
//           Small
//         </Button>
//
//     case 1:
//       return
// 	  <Button size="medium" className={classes.margin}>
// 		Medium
// 	  </Button>
//     case 2:
//       return
// 	  <Button size="large" className={classes.margin}>
// 		Large
// 	  </Button>
//     default:
//       return 'Uknown stepIndex';
//   }
// }

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  var n=6;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  function handleAdd() {
    n=n+1;
	alert(n);
	// alert(state);
  }

  function handleMinus() {
	if(n>=6){
		n=n-1;
		alert(n);
	}

  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>



	  {activeStep === 0 ? (
		  <div>
		  <div>
			 <Fab size="small" color="secondary" aria-label="minus" className={classes.margin}>
			   <RemoveIcon />
			 </Fab>

			 {n}

			<Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
			  <AddIcon onClick={handleAdd}/>
			</Fab>

		  </div>

		  <Button variant="contained" color="primary" onClick={handleNext}>
		    	Start!
		  </Button>
		  </div>
	  ) : (<div></div>)}




	  <div>
	  {	activeStep === 0 ? (
		  	  <Button size="small" className={classes.margin}>
		            1
		         </Button>
		): (<div></div>)
		}

		{	activeStep === 1 ? (
			<div>
  		  	  <TextMobileStepper/>
			  <Button variant="contained" color="primary" onClick={handleNext}>
			    	TEMP NEXT
			  </Button>
			</div>
  		): (<div></div>)
  		}

		{	activeStep === 2 ? (
			<div>
      <OBJModel src="./src/pangea3dgalleon.obj" texPath="./pangea3dgalleon.obj"/>
    </div>

  		): (<div></div>)
  		}
	  </div>
    </div>
  );
}
