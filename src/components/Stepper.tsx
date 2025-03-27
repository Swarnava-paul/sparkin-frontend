import { Button, ButtonGroup,Steps ,Box} from "@chakra-ui/react"
import { useContext, useState } from "react";
import { UiContext } from "../App";

import { FC } from "react";

interface StepperProps {
  UiComponent: FC;
}

const Stepper: FC<StepperProps> = ({ UiComponent }) => {

    const dispatch = useContext(UiContext);

    const stepComponents = [
      'AddAccount',
      'SelectActions',
      'LinkAccount',
      'Completed'
    ]
    const [currentStep, setCurrentStep] = useState(0);

    function handleNext() {
      let nextStep = currentStep;
      nextStep++;
      if(dispatch) {
        dispatch({ type: stepComponents[nextStep] });
        setCurrentStep(nextStep);
      }

    }

    function handlePrev() {
      let presentStep = currentStep;
      presentStep--;
      if(dispatch) {
        dispatch({ type: stepComponents[presentStep] });
        setCurrentStep(presentStep);

    }
  }

    const steps = [
        {
          title: "Add Account",
          description: "Add your cloud account",
        },
        {
          title: "SelectActions",
          description: "SelectActions ",
        },
        {
          title: "Link Account",
          description: "Details to fill for account linking",
        }
      
      ]
    
  return (
   <Box p={12}>
      <Steps.Root defaultStep={0} count={steps.length} colorPalette={'blue'}>
          <Steps.List>
            {steps.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <Steps.Trigger>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                </Steps.Trigger>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
    
          {steps.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.description}
            </Steps.Content>
          ))}
          <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

          <UiComponent/>
    
          <ButtonGroup size="xl" variant="outline" mt={20}>
            <Steps.PrevTrigger asChild>
              <Button onClick={()=>handlePrev()}>Prev</Button>
            </Steps.PrevTrigger>
            <Steps.NextTrigger asChild>
              <Button onClick={()=>handleNext()}>Next</Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </Steps.Root>
   </Box>
  )
}

export default Stepper;
