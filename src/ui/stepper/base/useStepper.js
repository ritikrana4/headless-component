import React, { useRef } from 'react' ;

export const useStepper = ({steps, currentStep, orientation="horizontal"}) => {
    const [_currentStep, setCurrentStep] = React.useState(currentStep ?? 0);
    const previousStepExist = useRef(false);
    const nextStepExist = useRef(false);
    const totalSteps = React.useRef(steps?.length);


    React.useEffect(()=>{
        setCurrentStep(currentStep)
    },[currentStep])

    previousStepExist.current = _currentStep > 0;
    nextStepExist.current = _currentStep < steps.length - 1;


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

    const handleStepClick = (step,index) => {
        console.log("step clicked",step,index);
        setCurrentStep(index);
    }

    const stepsProps = React.useMemo(()=>{
        return steps?.map((step,index)=>{
            return {
                onClick : () => handleStepClick(step,index)
            }
        })
    },[_currentStep,steps])

    const currentState = React.useMemo(()=>{
        return{
        currentStep : _currentStep,
        previousStepExist : previousStepExist.current,
        nextStepExist : nextStepExist.current,
        totalSteps : totalSteps.current
        }
    },[_currentStep])

    return {
        nextStep,
        prevStep,
        stepsProps,
        currentStep : _currentStep,
        stepperState : currentState
    }
}