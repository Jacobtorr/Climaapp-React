import useClima from "../hooks/useClima"


function Resultado() {

    const { resultado } = useClima();
    console.log(resultado)
    
    const { sys:{ country }, name, main: {temp, temp_min, temp_max} } = resultado;

    // Grados Kelvin
    const kelvin = 273.15;
    const tempActual = temp - kelvin;
    const tempMin = temp_min - kelvin;
    const tempMax = temp_max - kelvin;

  return (
    <div className="contenedor clima">
        <h2>Clima en {name}, {country}: </h2>

        <p>{parseInt(tempActual)} <span>&#x2103;</span></p>

        <div className="temp_min_max">
            <p>Min: {parseInt(tempMin)} <span>&#x2103;</span></p>
            <p>Max: {parseInt(tempMax)} <span>&#x2103;</span></p>
        </div>

    </div>
  )
}
export default Resultado