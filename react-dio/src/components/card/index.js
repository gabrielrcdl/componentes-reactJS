import {useState} from 'react';
import Button from '../button';


const Card = () =>{



    const [valor, meuValor] = useState(0)

    function Adiocionar(){
        meuValor (valor + 1)
    }
    function Decrementar(){
        meuValor (valor - 1)
    }


    
    return(
        <div className="card">

            <h4 className="card-header">Adiocione ou Decremente</h4>

            <div className="card-body">

                <p>{valor}</p>

                <Button
                    className="btn btn-success"
                    onClick={Adiocionar} >
                    Adicionar
                </Button>

                <Button
                    className="btn btn-danger"
                    onClick={Decrementar} >
                    Decremente
                </Button>

            </div>
            
        </div>
    )
}
export default Card;