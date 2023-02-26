import { useState } from "react";
import useClima from "../hooks/useClima"

function Formulario() {

    const [alerta, setAlerta] = useState('');
    const {busqueda, datosBusqueda, consultarClima, setResultado} = useClima();
    const { ciudad, pais } = busqueda;

    function handleSubmit(e) {
        e.preventDefault();

        // Validando los campos
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return;
        }

        // Consultar la API
        consultarClima(busqueda);
        setResultado({})

    }

  return (
    <div className="contenedor">

        {alerta && <p>{alerta}</p>}

        <form 
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    name="ciudad" 
                    id="ciudad"
                    value={ciudad}
                    onChange={datosBusqueda} 
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={datosBusqueda} 
                >

                    <option value="">Selecciona un pais</option>
                    <option value="VE">Venezuela</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CA">Canadá</option>
                    <option value="CL">Chile</option>
                    <option value="UY">Uruguay</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />

        </form>
    </div>
  )
}
export default Formulario