import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DiscreteSlider from './Slider.js';
import './stepper.css';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import TextMobileStepper from './ImageBroswer'

import {OBJModel} from 'react-3d-viewer'
import object from './out.obj'
import tex from './out.png'

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

export default function HorizontalLabelPositionBelowStepper(props) {

  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();



  return (
    <div className={classes.root}>
        {/* <Stepper id="x" activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
            <Step key={label}>
            <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper> */}

        {props.activeStep === 0 ? (
            <div class="all_container">
                <div class="content_container">
                    <div class="var_container">


                        <Fab style={{margin: '20px'}} color="secondary" aria-label="minus" className={classes.margin} onClick={props.handleMinus}>
                            <RemoveIcon />
                        </Fab>
                        <div class="slide_num">

                            <DiscreteSlider value={props.n} onChange={props.onChange} />

                        </div>


                        <Fab style={{margin: '20px'}} color="secondary" aria-label="add" className={classes.margin} onClick={props.handleAdd}>
                            <AddIcon />
                        </Fab>

                    </div>

                    <label class="var_num">
                        Taking {props.n} pictures
                    </label>

                    <Button style={{padding: '2% 15%'}} variant="contained" color="primary" onClick={props.handleNext}>
                        <label class="var_txt">Next</label>
                    </Button>
                </div>
            </div>
        ) : (<div></div>)}

        <div>
            {/* {	activeStep === 0 ? (
                <Button size="small" className={classes.margin}>
		            1
		         </Button>
                ): (<div></div>)
            } */}

            {	props.activeStep === 1 ? (
                <div class="all_container">
                    <div class="content_container">
                        <div class="abc">
                            Choose a base line.
                        </div>
                        {props.images.length===1 ? (<img src={props.Images[0]}/>) : (<div> </div> ) }

                        <Button style={{padding : '2% 15%'}} variant="contained" color="primary" onClick={props.handleTakePhotos}>
                            <label class="var_txt">{props.images.length===0? "Take reference image" : "Retake reference image"}</label>
                        </Button>

                        <div class="abc">
                        </div>

                        <Button style={{padding : '2% 15%'}} variant="contained" color="primary" onClick={props.onStart}>
                            <label class="var_txt">Start</label>
                        </Button>
                    </div>
                </div>
            ): (<div></div>)
            }

            {	props.activeStep === 2 ? (
                <div class="all_container">
                    <div class="content_container">
                        <div class="abc">
                            <TextMobileStepper images={props.images}/>
                        </div>



                    </div>
                </div>
            ): (<div></div>)
            }

            {	props.activeStep === 3 ? (
                <div class="content_container">
                    <OBJModel
                        src={object}
                        texPath={tex}
                    />
                </div>

            ): (<div></div>)
            }
        </div>
    </div>
  );
}
