import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/Api';

import './filme-info.css';

export default function Filme() {
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            // Verifica se o retorno (JSON) não é nulo. Se for, nulo é porque não existe o filme procurado
            if (response.data.length === 0) {
                // Erro 404. Retorna para Home
                history.replace('/');

                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return () => {
            console.log("Componente desmontado");
        }

    }, [history, id]);

    if (loading) {
        return (
            <div className="filme-info">
                <h2>Carregando...</h2>
            </div>
        );
    }
    return (
        <div className="filme-info">
            <h1>{File.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse:</h3>
            <p>{filme.sinopse}</p>

            <div className="botoes">
                <button onClick={()=>{}}>Salvar</button>
                <button>
                    <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome}+Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    );
}