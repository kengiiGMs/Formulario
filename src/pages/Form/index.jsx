import React from "react"
import FloatingInput from "../../component/floatingInput";
import { Link } from "react-router-dom";
import './style.scss';


const Form = () => {
    return (
        <div id="formPage">
            <div className="formArea">
                <h1 className="text-center">Formulário de Estudante</h1>
                <form>
                    <FloatingInput type="text" placeholder="Insira o seu nome" id="name" />
                    <FloatingInput type="text" placeholder="Insira o seu endereço" id="address" />
                    <FloatingInput type="number" placeholder="Insira o seu Telefone" id="phone" />
                    <FloatingInput type="text" placeholder="Insira o seu Curso" id="course" />
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary">Cadastrar</button>
                    </div>
                    <div className="text-center mt-2">
                        <Link to="/">Gerenciar Cadastos</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;