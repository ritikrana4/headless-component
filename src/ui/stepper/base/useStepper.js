import React from 'react' ;

export const useStepper = ({steps,currentStep}) => {
    const [_currentStep, setCurrentStep] = React.useState(currentStep ?? 0);
    
    const getNextStep = React.useCallback((currentStep)=>{
        return currentStep + 1;
    },[steps])

    const getPrevStep = React.useCallback((currentStep)=>{
        return currentStep -1;
    },[steps])

    const nextStep = React.useCallback(() => {
        //next step can not be bigger than last step 2 == 3-1=2
        if(_currentStep == steps?.length -1) return; 
        const nextStep = getNextStep(_currentStep)
        setCurrentStep(nextStep);
    })

    const prevStep = React.useCallback(() => {
        //prev step can not less than 0 step
        if(_currentStep == 0) return;
        const prevStep = getPrevStep(_currentStep);
        setCurrentStep(prevStep)
    })

    return {
        nextStep,
        prevStep,
        currentStep : _currentStep
    }
}