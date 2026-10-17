import { Calculator } from "./components/Calculator"
import CalculatorComplex from "./components/ComplexCalculator"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <>
    <Fejlec></Fejlec>
    <Calculator></Calculator>
    <CalculatorComplex></CalculatorComplex>
    </>
  )
}

function Fejlec(){
  return(
    <header>
      <h1>Számológép</h1>
    </header>
)
}

export default App
