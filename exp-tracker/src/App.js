import styled from "styled-components"; 
import Tracker from "./components/Tracker"; 
const Main = styled.div` 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`; 
const App = () => { 
  return ( 
    <Main> 
      <Tracker /> 
    </Main> 
  ) 
} 
  
export default App;
