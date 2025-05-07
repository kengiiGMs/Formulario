import { useState } from "react";
import api from '../../services/api';
import Swal from "sweetalert2";

const useListStudent = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    async function get() {
        try {
            setLoading(true);

            const response = await api.get("/student");

            setData(response.data);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro ao buscar estudantes",
                text: error.response?.data?.message || error.message,
            });

        } finally {
            setLoading(false);
        }
    }
    return [get, data, loading];
}

export default useListStudent;