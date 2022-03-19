
function saveTransation(transacion) { 
    let transacciones = getTransation();
    transacciones.push(transacion);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
}

function getTransation() { 
    const transaccion = JSON.parse(localStorage.getItem("transacciones"));

    if (transaccion) {
        return transaccion;
    } else {
        return [];
    }
 }

 