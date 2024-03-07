
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
      <Stepper currentStep={activeStep} onStepClick={setActiveStep}   >
        <Step  label="Step 0"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 0 content</div></Step>
        <Step label="Step 1"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 1 content</div></Step>
        <Step label="Step 2"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 2 content</div></Step>
      </Stepper>
      <div style={{display:'flex',justifyContent:"space-between"}}>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </>
  );
};

export default StepperComponent;
