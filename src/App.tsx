import './App.css';
import { Flex , Grid} from '@chakra-ui/react';
// Components
import AddAccount from './components/AddAccount';
import Sidebar from './components/ui/Sidebar';
import SelectActions from './components/SelectActions';
import AccountLink from './components/AccountLink';
import Completed from './components/Completed';

import { useReducer, createContext, Dispatch } from 'react';
import Stepper from './components/Stepper';
// Define action types
type UiAction = { type: string };

// Create a context that expects a valid Dispatch function
export const UiContext = createContext<Dispatch<UiAction> | null>(null);

// Fix: Store component references instead of JSX
function renderComponent(state: React.FC, action: UiAction): React.FC {
  console.log(state)
  switch (action.type) {
    case 'AddAccount':
      return AddAccount;
    case 'SelectActions':
      return SelectActions;
    case 'LinkAccount':
      return AccountLink;
    case  'Completed':
      return Completed;
    default:
      return AddAccount;
  }
}

function App() {
  const [UiComponent, dispatch] = useReducer(renderComponent, AddAccount); 

  return (
    <Flex w='100%' height='100vh' justify='space-around'>
      <Flex w='20%'>
      <Sidebar />
      </Flex>
      <Grid w='80%'>
      <UiContext.Provider value={dispatch}>
        <Stepper UiComponent={UiComponent}/>
      </UiContext.Provider>
      </Grid>
    </Flex>
  );
}

export default App;
