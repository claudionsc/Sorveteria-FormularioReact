import SorveteForm from "./components/form/Form";
import '../src/index.css'
import { FormStyle } from "./components/form/FormStyle";



function App() {
  return (
  <div id="main">

    <h1 className="titles">Faça o seu pedido</h1>
    <FormStyle />
    <SorveteForm />  
  </div>  
  );
}

export default App;
