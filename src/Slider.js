import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function valuetext(value) {
  return `${value}`;
}

function changeHandler(event, value) {
    alert(value);
    
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <div className={classes.margin} />

      <Slider
        defaultValue={6}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={1}
        max={20}
        valueLabelDisplay="auto"
        onChangeCommitted={changeHandler}
      />

    </div>
  );
}