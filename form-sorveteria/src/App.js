import SorveteForm from "./components/form/Form";
import { GlobalStyle } from "./components/globalStyle";
import { FormStyle } from "./components/form/FormStyle";
import { IceCream } from "./components/icon/IceCream"



function App() {
  return (
          <div id="main">

            <h1 className="titles">
              <IceCream className="iceCream" />
              Faça o seu pedido
              
              </h1>
              
            <GlobalStyle />
            <FormStyle />
            <SorveteForm />  
            <p className="titles">Esta página foi criada com ReactJs, styled components e componentização</p>          
          </div>  
  );
}

export default App;
