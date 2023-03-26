import { Stepper, Step } from 'react-form-stepper';

interface StepperProps {
    activeStep: number;
}

const GenerateStep = ({ activeStep }: StepperProps) => {
    return (
        <Stepper activeStep={activeStep}>
            <Step label="Upload images" />
            <Step label="Generate Prompts" />
        </Stepper>
    )
}

export default GenerateStep;