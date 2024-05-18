import { useStepper } from "../base/useStepper";
import React from 'react'
const StepperContext = React.createContext(null);

export const Stepper = React.forwardRef(({currentStep = 0, orientation = 'horizontal',as = "nav" , ...rest},ref) => {
    console.log(currentStep,"current")
    const {children , onStepClick} = rest;

    const Element = as;

    const allSteps = React.Children.toArray(children); 

    if(currentStep > allSteps.length - 1 || currentStep < 0){
        throw Error("Current Step can not be small then zero or more than steps length")
    }

    console.log(allSteps,"all steps")
    const stepperInitials = React.useMemo(()=>{
        return {
            currentStep,
            orientation,
            steps: allSteps.map(step => step.props)  
        }
    },[currentStep])
    console.log(stepperInitials,"stepperinitials")

    let stepperInstance = useStepper({...stepperInitials});


    console.log(stepperInstance,"stepperinitials")


    const Steps = allSteps.reduce((acc,step,index)=>{
        const isDisabled = step.props.disabled;
        const isActive = index == currentStep
        // acc.push(React.cloneElement(step,{disabled : isDisabled, active:isActive, ...stepperInstance?.stepsProps[index]}))
        if(index > 0 && allSteps?.length>1){
            acc.push(React.cloneElement(<div style={{position:'relative',top:"20px"}}>
                <span style={{minWidth:"100px",display: "block",border: "1px solid #bdbdbd"}}></span>
            </div>))
        }
        acc.push(React.cloneElement(step,{disabled: isDisabled , active: isActive, onClick : ()=>onStepClick(index)}))

        return acc;
    },[])

    console.log(Steps,"steps")
    const StepContent =allSteps[stepperInstance?.stepperState?.currentStep]?.props?.children
    return(
        <StepperContext.Provider value={stepperInstance} >
            <Element style={{display:'flex',gap:'0px',justifyContent:"center" }} >
                {Steps}
            </Element>
            <div>
                {StepContent}
            </div>
        </StepperContext.Provider>
    )
    
})
