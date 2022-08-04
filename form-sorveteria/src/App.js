import SorveteForm from "./components/form/Form";
import { GlobalStyle } from "./components/globalStyle";
import { FormStyle } from "./components/form/FormStyle";


function App() {
  return (
          <div id="main">

            <h1>Faça o seu pedido</h1>
            <GlobalStyle />
            <FormStyle />
            <SorveteForm />            
          </div>  
  );
}

export default App;
