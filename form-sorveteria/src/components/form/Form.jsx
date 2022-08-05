import React from "react";
import {Button} from "../button/Button";
import { SaboresForm } from "./FormStyle";
import { Casquinha } from "./FormStyle";
import { Colher } from "./FormStyle";


class SorveteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = { //o estado inicial oferece o sabor, casquinha e colher
            sabor: 'chocolate',
            casquinha: true,
            colher: 'sim'

        };

        this.handleInputChange = this.handleInputChange.bind(this); // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { sabor, casquinha, colher } =this.state;
        alert( `Seu sabor escolhido foi ${sabor}. Casquinha? ${casquinha}. Colher?${colher}`)
        event.preventDefault();
    }

    render() {
        return(

            

            <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column'}} id='form'>
                <SaboresForm>
                    Escolha o sabor:
                    <select name="sabor" value={this.state.sabor} onChange={this.handleInputChange} id="">
                        <option value="chocolate">Chocolate</option>
                        <option value="morango">Morango</option>
                        <option value="creme">Creme</option>
                        <option value="cafe">Café</option>
                        <option value="coco">Coco</option>
                    </select>
                </SaboresForm>
                <Casquinha>
                    <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange} id="casquinha" />
                    Colocar na casquinha?
                </Casquinha>
                <Colher>
                    Colher?
                    <div className="radio">
                        <label>
                            <input type="radio" name="colher" id="colher" value='sim' checked={this.state.colher === 'sim'} onChange={this.handleInputChange} />
                            Sim
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" name="colher" id="colher" value='nao' checked={this.state.colher === 'nao'} onChange={this.handleInputChange} />
                            Não
                        </label>
                    </div>
                </Colher>
                <Button />
                


            </form>
        )
    }
}


export default SorveteForm