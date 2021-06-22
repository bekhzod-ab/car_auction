import { NavComp } from './components/authentication/NavComp';
import { ContextProvider } from './context/UseContext';
import { LootBody } from './components/Lot/LotBody';


function App() {
  return (
    <ContextProvider>
      <NavComp/>
      <LootBody/>
    </ContextProvider>
  )
}

export default App;
