function saveTransationGasto(transaciongasto) {
    let gastotransacciones = getTransationGasto();
    gastotransacciones.push(transaciongasto);
    localStorage.setItem("lastransacciones", JSON.stringify(gastotransacciones));
}

function getTransationGasto() {
    const mitransacciones = JSON.parse(localStorage.getItem("lastransacciones"));

    if (mitransacciones) {
        return mitransacciones;
    } else {
        return [];
    }
}
