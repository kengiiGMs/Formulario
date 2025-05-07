import React, { useState } from "react"
import FloatingInput from "../../component/floatingInput";
import { Link } from "react-router-dom";
import './style.scss';
import useCreateStudent from "../../hooks/student/useCreateStudent";
import Spinner from "../../component/spinner";

const Form = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [create, loading] = useCreateStudent();

    const submit = async (e) => {
        e.preventDefault();
        await create(name, address, phone, course);
    }

    return (
        <div id="formPage">
            {loading ? (
                <Spinner width="75px" height="75px" />

            ) : (
                <div className="formArea">
                    <h1 className="text-center">Formulário de Estudante</h1>
                    <form onSubmit={submit}>
                        <FloatingInput type="text" placeholder="Insira o seu nome" id="name" onChange={(e) => setName(e.target.value)} />
                        <FloatingInput type="text" placeholder="Insira o seu endereço" id="address" onChange={(e) => setAddress(e.target.value)} />
                        <FloatingInput type="number" placeholder="Insira o seu Telefone" id="phone" onChange={(e) => setPhone(e.target.value)} />
                        <FloatingInput type="text" placeholder="Insira o seu Curso" id="course" onChange={(e) => setCourse(e.target.value)} />
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" disabled={loading}>Cadastrar</button>
                        </div>
                        <div className="text-center mt-2">
                            <Link to="/">Gerenciar Cadastros</Link>
                        </div>
                    </form>
                </div>
            )
            }
        </div >
    )
}

export default Form;