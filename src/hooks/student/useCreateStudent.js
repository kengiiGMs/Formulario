import { useState } from "react";
import api from "../../services/api";
import Swal from "sweetalert2";

const useCreateStudent = () => {
    const [loading, setLoading] = useState(false);

    async function create(name, address, phone, course) {
        try {
            setLoading(true);
            console.log(name);
            await api.post("/student", {
                name: name,
                address: address,
                phone: phone,
                course: course
            });
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cadastrado",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Erro ao cadastrar estudante",
                text: err.response?.data?.message || err.response,
            });
        } finally {
            setLoading(false);
        }
    }
    return [create, loading];
}

export default useCreateStudent;