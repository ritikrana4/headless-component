
import {Stepper} from "./ui/stepper/component/Stepper";
import {Step} from "./ui/stepper/component/Step";
import { useState } from "react";


const StepperComponent = ({}) => {
  const [activeStep,setActiveStep] = useState(0);

  const nextStep = () => {
    if(activeStep<2){
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if(activeStep>0){
      setActiveStep(prev => prev - 1);
    }
  };


  return (
    <>
      <Stepper currentStep={activeStep} onStepClick={setActiveStep}  >
        <Step  label="Step 0"> Step 0 content</Step>
        <Step label="Step 1"> Step 1 content</Step>
        <Step label="Step 2">Step 2 content</Step>
      </Stepper>
    <button onClick={nextStep}>Next</button>
    <button onClick={prevStep}>Prev</button>
    </>
  );
};

export default StepperComponent;
