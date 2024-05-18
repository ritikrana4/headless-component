
import Stepper from "./ui/stepper/component";
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
        <Stepper.Step  label="0" subLabel="Step 1"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 0 content</div></Stepper.Step>
        <Stepper.Step label="1"  subLabel="Step 2"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 1 content</div></Stepper.Step>
        <Stepper.Step label="2"  subLabel="Step 3"><div style={{height:"100px",justifyContent:"center",alignItems:"center",display:"flex"}}>Step 2 content</div></Stepper.Step>
      </Stepper>
      <div style={{display:'flex',justifyContent:"space-between"}}>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </>
  );
};

export default StepperComponent;
