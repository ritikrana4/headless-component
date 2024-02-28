import React from "react";
import { useStepper } from "../base/useStepper";

 const Stepper = () => {
    const steps = React.useMemo(
        () => [
          { label: 'Step 1' },
          { label: 'Step 2' },
          { label: 'Step 3' },
        ],
        []
    );
    
    const { nextStep, prevStep, currentStep, stepperState, stepsProps } = useStepper({steps});
    console.log(stepperState,stepsProps[0],"stepper")
    return (
        <div>
            <nav>
            {steps.map((step,index) => (
                
                <ol key={index} style={{
                    fontWeight: currentStep === index ? 'bold' : 'unset',
                  }}
                  onClick={()=>stepsProps[index].onClick()}
                  >
                     <a >{steps[index].label}</a>
                </ol>
            ))}
            </nav>  
            <p>Current step: {currentStep + 1}</p>

            <button onClick={prevStep} >Prev</button>
            <button onClick={nextStep} >Next</button> 
            
        </div>
    )
}

export default Stepper