import { useState, createContext } from "react";

const ClimaContext = createContext();

function ClimaProvider({children}) {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const [noResultado, setNoResultado] = useState(false);


    function datosBusqueda (e) {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Recibe los datos de la busqueda y consulta la API
    async function consultarClima (datos) {
        setCargando(true);
        setNoResultado(false);

        try {
            const { ciudad, pais } = datos;
            const appId = import.meta.env.VITE_API_KEY;

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
            const respuesta = await fetch(url);
            const data = await respuesta.json();

            setResultado(data);
        } catch (error) {
            setNoResultado('No hay Resultados')
        } finally {
            setCargando(false)
        }
    }

  return (
    <ClimaContext.Provider
        value={{
            busqueda,
            datosBusqueda,
            consultarClima,
            resultado,
            setResultado,
            cargando,
            noResultado
        }}
    >

        {children}
    </ClimaContext.Provider>
  )
}

export {
    ClimaProvider
} 

export default ClimaContext;
    