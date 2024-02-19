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
    
    const { nextStep, prevStep ,currentStep } = useStepper({steps});
    
    return (
        <div>
            <nav>
            {steps.map((step,index) => (
                <ol key={index}  style={{
                    // opacity: steps[index].disabled ? 0.6 : 1,
                    fontWeight: currentStep === index ? 'bold' : 'unset',
                  }}
                  >
                     <a>{steps[index].label}</a>
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