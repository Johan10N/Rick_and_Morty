import { useEffect, useState } from "react";
import Caracteres from "./caracteres";

function Navegador(props) {
  return (
    <div className="d-flex justify-content-between aling-items-center">
      {props.page ==1 ? (
      <p><b>Pagina {props.page}</b></p>
      ):(
        <button
        className="btn btn-dark btn-sm"
        onClick={() => props.setPage(props.page - 1)}
      >
        Pagina {props.page}
      </button>
      )}
      
      <button
        className="btn btn-dark btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Siguiente
      </button>
    </div>
  );
}

function ListaCaracteres() {
  const [character, setcharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + page
      );
      const data = await response.json();
      setLoading(false);
      setcharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div className="container">
      <Navegador page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {character.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Caracteres character={character} />
              </div>
             );  
           })}
        
        </div>        
      )}

       

     </div>
  );
}


export default ListaCaracteres;
